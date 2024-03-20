import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isScrolled: boolean = false;

 constructor(){}

 ngOnInit(): void{

 }

 @HostListener('window:scroll', [])
 onWindowScroll() {
   // Detect if user has scrolled
   if (window.scrollY > 50) { // Adjust as needed
     this.isScrolled = true;
   } else {
     this.isScrolled = false;
   }
 }

}
