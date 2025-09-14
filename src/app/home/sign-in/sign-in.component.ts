import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MaterialModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  @Output() backgroundChange = new EventEmitter<string>();

  private router = inject(Router);
  private fb = inject(FormBuilder);
  passwordVisible: boolean = false;
  hide = true;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.buildLoginForm();
    this.backgroundChange.emit('assets/img/bg-1.png');
  }

  /**
   * Constrói o formulário de login com validações.
   */
  buildLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Submete o formulário de login.
   * Se o formulário for válido, autentica o usuário e redireciona para a rota apropriada.
   */
  onSubmit() {
    this.router.navigate(['interno']);
  }

  /**
   * Alterna a visibilidade da senha no campo de entrada.
   */
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    if (passwordInput) {
      passwordInput.type = this.passwordVisible ? 'text' : 'password';
    }
  }

  /**
   * Verifica se um controle do formulário possui um erro específico.
   * 
   * @param {string} control - Nome do controle.
   * @param {string} error - Nome do erro.
   * @returns {boolean} - Verdadeiro se o controle possui o erro, falso caso contrário.
   */
  getControlErrors(control: string, error: string) {
    return this.loginForm.get(control)?.hasError(error);
  }

  /**
   * Verifica se um controle do formulário foi tocado.
   * 
   * @param {string} control - Nome do controle.
   * @returns {boolean} - Verdadeiro se o controle foi tocado, falso caso contrário.
   */
  getControlTouched(control: string) {
    return this.loginForm.get(control)?.touched;
  }

  navigateToForgotPassword() {
    this.router.navigate(['inicio/recuperar-senha']);
  }
}

