import { Component } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { HeaderProfileComponent } from "../../../shared/components/header-profile/header-profile.component";
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-deatails-product',
  standalone: true,
  imports: [HeaderPageComponent, HeaderProfileComponent, MaterialModule],
  templateUrl: './deatails-product.component.html',
  styleUrl: './deatails-product.component.scss'
})
export class DeatailsProductComponent {
  currentSlide = 0;

  goToSlide(index: number) {
    this.currentSlide = index;
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }
}
