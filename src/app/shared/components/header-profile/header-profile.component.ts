import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-profile',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.scss'
})
export class HeaderProfileComponent {
  @Input() baseRoute: string = '';
  
  constructor(
    private router: Router, 
    private route: ActivatedRoute) {}

  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate([`/inicio`]);
  }

  isLogged(): boolean {
    return sessionStorage.getItem('user') ? true : false;
  }
}
