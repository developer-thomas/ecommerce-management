import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
  @Input() data: any;

}
