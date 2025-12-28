import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


// Add:

// Menu
import { MatMenuModule } from '@angular/material/menu';         //  <mat-menu>
import { MatToolbarModule } from '@angular/material/toolbar';   //  <mat-toolbar>
import { CommonModule } from "@angular/common";                 //  *ngFor
import { Router } from '@angular/router';                       // constructor(private router: Router) {}

// Sidebar
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


// Menu down section
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet

    // Add:

    // Nested Menu
    ,MatMenuModule,       //  <mat-menu>
    MatToolbarModule,     //  <mat-toolbar>
    CommonModule,         //  *ngFor


    // Sidebar
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,

    RouterLink,

    // Sidebar Menu down section
    MatExpansionModule

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('06portfolioapp');

  // Sidebar responsive
  isSmallScreen = false;


  constructor(
      private router: Router,        // Nested Menu
      private breakpointObserver: BreakpointObserver
  ) {}



  navigateTo(routeUrl: string): void {
      this.router.navigate([routeUrl]);
  }
}
