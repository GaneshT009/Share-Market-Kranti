import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

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
