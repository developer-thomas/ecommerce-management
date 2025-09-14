import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MaterialModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  @Output() backgroundChange = new EventEmitter<string>();
  resetPasswordForm: FormGroup;
  
  ngOnInit() {
    this.backgroundChange.emit('assets/img/bg-3.png');
  }

  

  constructor(private fb: FormBuilder) {
    this.resetPasswordForm = this.fb.group({
      token: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const { token, newPassword, confirmPassword } = this.resetPasswordForm.value;
      if (newPassword === confirmPassword) {
        // Lógica para redefinir a senha
        console.log('Senha redefinida com sucesso:', { token, newPassword });
      } else {
        console.error('As senhas não coincidem');
      }
    }
  }
}
