import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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
