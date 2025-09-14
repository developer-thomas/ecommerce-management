import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  providers: [provideNgxMask()]
})
export class ModalComponent {
  couponForm: FormGroup
  private fb: FormBuilder = inject(FormBuilder);
  private dialogRef: MatDialogRef<ModalComponent> = inject(MatDialogRef<ModalComponent>);
  
  products = [
    { id: 1, name: "Todos produtos" },
    { id: 2, name: "Produto 1" },
    { id: 3, name: "Produto 2" },
    { id: 4, name: "Produto 3" },
  ]

  constructor() {
    this.couponForm = this.fb.group(
      {
        code: ["", Validators.required],
        startDate: [null, Validators.required],
        expirationDate: [null, Validators.required],
        discount: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
        quantity: ["", [Validators.required, Validators.min(0)]],
        product: ["", Validators.required],
        partner: [""],
      },
      { validators: this.dateComparisonValidator },
    )
  }

  dateComparisonValidator(group: FormGroup): { [key: string]: any } | null {
    const startDate = group.get("startDate")?.value
    const expirationDate = group.get("expirationDate")?.value

    if (startDate && expirationDate) {
      return startDate < expirationDate ? null : { dateComparison: true }
    }
    return null
  }

  onCancel(): void {
    this.dialogRef.close()
  }

  onSave(): void {
    if (this.couponForm.valid) {
      this.dialogRef.close(this.couponForm.value)
    } else {
      Object.keys(this.couponForm.controls).forEach((key) => {
        const control = this.couponForm.get(key)
        control?.markAsTouched()
      })
    }
  }
}
