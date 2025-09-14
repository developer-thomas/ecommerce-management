import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../../shared/components/header-profile/header-profile.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-form-products',
  standalone: true,
  imports: [
    HeaderPageComponent,
    HeaderProfileComponent,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxMaskDirective],
  templateUrl: './form-products.component.html',
  styleUrl: './form-products.component.scss'
})
export class FormProductsComponent {
  currentStep: number = 1;
  produtoForm: FormGroup;
  variacoesForm: FormGroup;
  arquivos: File[] = [];
  imagens: File[] = [];
  imagePreviews: (string | ArrayBuffer | null)[] = [];
  fotoPreviews: (string | ArrayBuffer | null)[] = [];
  currentSlide = 0;
  skipVariacoes: boolean = false;


  constructor(private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
      quantidade: ['', Validators.required],
      valor: ['', Validators.required],
      valorPromocional: ['', Validators.required],
      descricao: ['', Validators.required]
    });

    this.variacoesForm = this.fb.group({
      variacoes: this.fb.array([this.createVariacao()])
    });
  }

  ngOnInit(): void { }

  get variacoes(): FormArray {
    return this.variacoesForm.get('variacoes') as FormArray;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  createVariacao(): FormGroup {
    return this.fb.group({
      titulo: ['', Validators.required],
      tipo: ['', Validators.required],
      valor: ['', Validators.required],
      valorPromocional: ['', Validators.required],
      cor: ['', Validators.required]
    });
  }

  addVariacao(): void {
    this.variacoes.push(this.createVariacao());
    this.fotoPreviews.push(null);
  }

  removeVariacao(index: number): void {
    if (index !== 0) {
      this.variacoes.removeAt(index);
      this.fotoPreviews.splice(index, 1);
    }
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.produtoForm.valid) {
      // Lógica para enviar o formulário
      console.log(this.produtoForm.value);
    }
  }

  onImageChange(event: any): void {
    if (event.target.files.length > 0) {
      const files = Array.from(event.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreviews.push(reader.result);
        };
        reader.readAsDataURL(file as Blob);
      });
    }
  }

  skipVariacoesStep(): void {
    this.skipVariacoes = true;
    this.nextStep();
  }

  removeImage(preview: string | ArrayBuffer | null): void {
    const index = this.imagePreviews.indexOf(preview);
    if (index > -1) {
      this.imagePreviews.splice(index, 1);
    }
  }

  onFotoChange(event: any, index: number): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.fotoPreviews[index] = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  getProgressWidth(): string {
    const totalSteps = 3;
    const margin = 15 * 2;
    const progressWidth = ((this.currentStep - 1) / (totalSteps - 1)) * (100 - margin);
    return `${progressWidth}%`;
  }
}
