import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
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
