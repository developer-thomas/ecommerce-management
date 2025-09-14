import { Component, OnInit } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../../shared/components/header-profile/header-profile.component";
import { CardProductCartComponent } from "../../../shared/components/card-product-cart/card-product-cart.component";
import { MaterialModule } from '../../../material.module';
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-box',
  standalone: true,
  imports: [
    HeaderPageComponent, 
    HeaderProfileComponent, 
    CardProductCartComponent, 
    MaterialModule,
    CommonModule],
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.scss']
})
export class CartBoxComponent implements OnInit {
  cartItems: any[] = [];
  totalProductValue: number = 0;
  totalShippingCost: number = 0;
  totalCashValue: number = 0;
  cashSavings: number = 0;

  ngOnInit(): void {
    this.bringCart();
  }

  bringCart(): void {
    // Mocked cart items
    this.cartItems = [
      {
        product: {
          id: 1,
          nome: 'Produto 1',
          descricao: 'Descrição do Produto 1',
          precoOriginal: 100.00,
          precoDesconto: 90.00,
          categoria: 'Categoria 1',
          imagem: 'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__'
        },
        quantity: 2
      },
      {
        product: {
          id: 2,
          nome: 'Produto 2',
          descricao: 'Descrição do Produto 2',
          precoOriginal: 200.00,
          precoDesconto: 180.00,
          categoria: 'Categoria 2',
          imagem: 'https://s3-alpha-sig.figma.com/img/04a5/d20e/e9b98428957dc986560ef5aa243c2ca7?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJQnUSyxZMXgOzhTYyOg89JwNaBpYmUP60C9p73ur6hicBpeLLSfnttwSwOhqZMGUbljbUVWSMzPirDYX3-73xVjqydFYJmrIk5rMKD8Po3nsaxOi-~c2SGPMXKolvidOp~u759pwrjjBS8xT8cqrkz~QoKXyRWff2vBETdOBaPv62A4hSEtYTD4Plqhavz2ksR4yQEXmPBmESKkAU8qtAcoLsOaOuYifPJatJQZc4dtpwTQQ5hDj9xbBzXy5XJpGPTypitmE7fPQ1p~ynrP6UOyYRmN1st5pdHf22Wv0y2-OrxGsA3toCjZPkuqiPTJTjDb-LTZY9EKey2z~6I1zA__'
        },
        quantity: 1
      }
    ];

    this.calculateTotals();
  }

  calculateTotals(): void {
    this.totalProductValue = this.cartItems.reduce((total, item) => total + (item.product.precoDesconto * item.quantity), 0);
    this.totalShippingCost = this.cartItems.length * 10; // Mocked shipping cost
    this.totalCashValue = this.totalProductValue - (this.totalProductValue * 0.1); // Mocked 10% discount for cash payment
    this.cashSavings = this.totalProductValue - this.totalCashValue;
  }

  getTotalProductValue(): number {
    return this.totalProductValue;
  }

  getTotalShippingCost(): number {
    return this.totalShippingCost;
  }

  getTotalInstallmentValue(): number {
    return this.totalProductValue / 12; // Mocked 12 installments
  }

  getTotalCashValue(): number {
    return this.totalCashValue;
  }

  getCashSavings(): number {
    return this.cashSavings;
  }

  removeAllProducts(): void {
    this.cartItems = [];
    this.calculateTotals();
  }

  goToPayment(): void {
    // Logic to navigate to the payment page
    console.log('Navigating to payment page...');
  }

  goToProducts(): void {
    // Logic to navigate to the products page
    console.log('Navigating to products page...');
  }
}