import { Component, OnInit } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../../shared/components/header-profile/header-profile.component";
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailProductComponent } from '../modal-detail-product/modal-detail-product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mounting-box',
  standalone: true,
  imports: [HeaderPageComponent, HeaderProfileComponent, CommonModule, MaterialModule],
  templateUrl: './mounting-box.component.html',
  styleUrl: './mounting-box.component.scss'
})
export class MountingBoxComponent implements OnInit {
  produtos = [
    {
      imagem: 'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__',
      nome: 'Nome do Produto 1',
      categoria: 'Categoria 1',
      precoOriginal: 'R$ 100,00',
      precoDesconto: 'R$ 90,00'
    },
    {
      imagem: 'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__',
      nome: 'Nome do Produto 2',
      categoria: 'Categoria 2',
      precoOriginal: 'R$ 200,00',
      precoDesconto: 'R$ 180,00'
    },
    {
      imagem: 'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__',
      nome: 'Nome do Produto 3',
      categoria: 'Categoria 3',
      precoOriginal: 'R$ 300,00',
      precoDesconto: 'R$ 270,00'
    }
  ];

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {}

  openProductDetail(produto: any): void {
    const dialogRef = this.dialog.open(ModalDetailProductComponent, {
      width: '80%',
      data: { product: produto }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goToCart(){
    this.router.navigate(['interno/pedidos/carrinho-box']);
  }
}
