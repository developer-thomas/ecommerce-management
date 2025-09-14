import { Component } from '@angular/core';
import { CommonTableComponent } from '../../shared/components/common-table/common-table.component';
import { HeaderPageComponent } from '../../shared/components/header-page/header-page.component';
import { HeaderProfileComponent } from '../../shared/components/header-profile/header-profile.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})
export class CouponsComponent {

}
