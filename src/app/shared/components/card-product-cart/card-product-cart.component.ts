import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-product-cart',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './card-product-cart.component.html',
  styleUrls: ['./card-product-cart.component.scss']
})
export class CardProductCartComponent implements OnInit {
  @Input() product: any;
  @Input() quantity!: number;
  @Output() productRemoved = new EventEmitter<void>();
  @Output() productAdded = new EventEmitter<void>();
  @Output() productDecreased = new EventEmitter<void>();

  userId: number = 1; // Mocked user ID

  constructor() {}

  ngOnInit(): void {
    this.bringInfoUser();
  }

  /**
   * Mocked method to fetch the authenticated user's information.
   */
  bringInfoUser() {
    // Mocked user information
    const userInfo = { id: 1, name: 'Mocked User' };
    if (userInfo) {
      this.userId = userInfo.id;
    }
  }

  /**
   * Increments the product quantity.
   */
  incrementQuantity() {
    this.quantity++;
    this.productAdded.emit();
  }

  /**
   * Decrements the product quantity.
   */
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.productDecreased.emit();
    }
  }

  /**
   * Removes all quantities of the product from the cart.
   */
  removeAllQuantities() {
    this.quantity = 0;
    this.productRemoved.emit();
  }

  /**
   * Creates a CartProduct object.
   * @returns {CartProduct} - The created CartProduct object.
   */
  private createCartProduct(): any {
    return {
      productId: +this.product.id,
      quantity: this.quantity,
      product: {
        id: +this.product.id,
        title: this.product.title,
        description: this.product.description,
        bula: this.product.bula,
        quantity: this.product.quantity,
        value: this.product.value,
        promo: this.product.promo,
        averageRate: this.product.averageRate,
        media: this.product.media,
        category: this.product.category
      }
    };
  }

  /**
   * Creates the request body.
   * @param {CartProduct} cartProduct - The CartProduct object.
   * @returns {any} - The request body.
   */
  private createRequestBody(cartProduct: any) {
    return {
      patientId: this.userId,
      total: this.product.promo,
      shippingValue: this.product.averageRate,
      products: [cartProduct]
    };
  }
}