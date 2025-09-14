import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  backgroundImage: string = '';

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundImage(event.urlAfterRedirects);
      }
    });
  }

  updateBackgroundImage(url: string) {
    if (url.includes('recuperar-senha')) {
      this.backgroundImage = 'assets/img/bg-2.png';
    } else if (url.includes('resetar-senha')) {
      this.backgroundImage = 'assets/img/bg-3.png';
    } else {
      this.backgroundImage = 'assets/img/bg-1.png';
    }
    this.cdr.detectChanges(); 
  }

  onActivate(componentRef: any) {
    if (componentRef.backgroundChange) {
      componentRef.backgroundChange.subscribe((bgImage: string) => {
        this.backgroundImage = bgImage;
        this.cdr.detectChanges(); 
      });
    }
  }
}