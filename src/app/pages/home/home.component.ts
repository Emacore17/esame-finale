import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  latitudine!: number;
  longitudine!: number;

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/meteo-data', this.latitudine, this.longitudine]);
  }
}
