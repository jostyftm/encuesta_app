import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  private isLogged: Boolean = true;

  constructor(
    private router: Router
  ){

  }

  ngOnInit(){

    if(this.isLogged){
      this.router.navigate(['/dashboard']);
    }
  }

}
