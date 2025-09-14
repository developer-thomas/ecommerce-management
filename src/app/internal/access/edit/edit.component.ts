import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AccessService } from '../access.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, MaterialModule, HeaderPageComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  colaboradorForm!: FormGroup
  passwordVisible = false
  colaboradorId!: number
  
  private fb: FormBuilder = inject(FormBuilder);
  private route: ActivatedRoute = inject(ActivatedRoute);
  public router: Router = inject(Router);
  private accessService: AccessService = inject(AccessService);

  permissions: { [key in "dashboard" | "modulos1" | "modulos2" | "modulos3" | "modulos4" | "modulos5"]: boolean } = {
    dashboard: false,
    modulos1: false,
    modulos2: false,
    modulos3: false,
    modulos4: false,
    modulos5: false,
  }

  constructor() {}

  ngOnInit(): void {
    this.colaboradorForm = this.fb.group({
      nomeUsuario: ["", Validators.required],
      cpf: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", Validators.required],
      acessos: ["", Validators.required],
    })

    this.route.params.subscribe((params) => {
      this.colaboradorId = +params["id"]
      this.loadColaborador()
    })
  }

  loadColaborador(): void {
    this.accessService.getColaborador(this.colaboradorId).subscribe(
      (colaborador) => {
        this.colaboradorForm.patchValue(colaborador)
        this.permissions = colaborador.permissions || this.permissions
      },
      (error) => {
        console.error("Erro ao carregar colaborador", error)
        // Adicione aqui a lógica para lidar com o erro (ex: mostrar uma mensagem ao usuário)
      },
    )
  }

  togglePermission(permission: "dashboard" | "modulos1" | "modulos2" | "modulos3" | "modulos4" | "modulos5"): void {
    this.permissions[permission] = !this.permissions[permission]
  }

  onSubmit(): void {
    if (this.colaboradorForm.valid) {
      const colaboradorData = {
        ...this.colaboradorForm.value,
        permissions: this.permissions,
      }
      this.accessService.updateColaborador(this.colaboradorId, colaboradorData).subscribe(
        () => {
          console.log("Colaborador atualizado com sucesso")
          this.router.navigate(["/colaboradores"]) // Ajuste a rota conforme necessário
        },
        (error) => {
          console.error("Erro ao atualizar colaborador", error)
          // Adicione aqui a lógica para lidar com o erro (ex: mostrar uma mensagem ao usuário)
        },
      )
    }
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible
    const senhaInput = document.getElementById("senha") as HTMLInputElement
    if (senhaInput) {
      senhaInput.type = this.passwordVisible ? "text" : "password"
    }
  }
}
