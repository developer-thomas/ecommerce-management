import { Component } from '@angular/core';
import { HeaderPageComponent } from '../../../shared/components/header-page/header-page.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-form-access',
  standalone: true,
  imports: [HeaderPageComponent, ReactiveFormsModule, CommonModule, MaterialModule],
  templateUrl: './form-access.component.html',
  styleUrl: './form-access.component.scss'
})
export class FormAccessComponent {
  colaboradtorForm!: FormGroup;
  passwordVisible: boolean = false;

  permissions: { [key in 'dashboard' | 'modulos1' | 'modulos2' | 'modulos3' | 'modulos4' | 'modulos5']: boolean } = {
    dashboard: false,
    modulos1: false,
    modulos2: false,
    modulos3: false,
    modulos4: false,
    modulos5: false,
  };


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.colaboradtorForm = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      estado: ['', Validators.required],
      municipio: ['', Validators.required],
      nomeUsuario: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      acessos: ['', Validators.required],
      dashboard: [false],
      modulos1: [false],
      modulos2: [false]
    });
  }

  togglePermission(permission: 'dashboard' | 'modulos1' | 'modulos2' | 'modulos3' | 'modulos4' | 'modulos5'): void {
    this.permissions[permission] = !this.permissions[permission];
  }



  onSubmit(): void {
    if (this.colaboradtorForm.valid) {
      console.log(this.colaboradtorForm.value);
      // Lógica para adicionar a filial
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    const senhaInput = document.getElementById('senha') as HTMLInputElement;
    if (this.passwordVisible) {
      senhaInput.type = 'text';
    } else {
      senhaInput.type = 'password';
    }
  }

}
