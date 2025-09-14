import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-detail-product',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './modal-detail-product.component.html',
  styleUrl: './modal-detail-product.component.scss'
})
export class ModalDetailProductComponent {
  product = {
    title: 'Nome do Produto',
    images: [
      'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__',
      'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__',
      'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__',
      'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__'
    ],
    value: 200.00,
    promo: 150.00,
    description: 'Descrição detalhada do produto.',
    flavor: true
  };
  selectedImage = this.product.images[0];

  constructor(
    public dialogRef: MatDialogRef<ModalDetailProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
  }

  ngOnInit(): void {
  }

  selectImage(img: string): void {
    this.selectedImage = img;
  }

  addFavorite(): void {
    // Lógica para adicionar aos favoritos
  }

  getDiscountPercentage(): number {
    return ((this.product.value - this.product.promo) / this.product.value) * 100;
  }

  getDiscountedPrice(): number {
    return this.product.promo;
  }

  getInstallmentValue(): number {
    return this.product.promo / 10;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}