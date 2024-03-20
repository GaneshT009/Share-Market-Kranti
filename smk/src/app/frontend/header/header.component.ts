import { Component, HostListener } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

isScrolled: boolean = false;

constructor(){}

ngOnInit():void{
  const target = document.querySelector('.text1');
  if (!target) {
      console.error('Target element not found.');
      return;
    }
  const writer = new Typewriter(target, {
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    typeColor: '#F04E23',
    fontweight: 900
  })
  
  writer
  .type('Share Market')
  .rest(1000)
  .changeOps({ deleteSpeed: 60 })
  .clear()
  .type('Live Trading')
  .rest(1000)
  .clear()
  .type('Mutual Fund')
  .rest(1000)
  .changeOps({ deleteSpeed: 20 })
  .clear()
  .type('SIP')
  .rest(1000)
  .clear()
  .start();

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
