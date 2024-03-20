import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'', redirectTo:'front', pathMatch:'full'
  },
  {
    path:'front', component:FrontComponent,
    children:[
      {
        path:'', redirectTo:'home', pathMatch:'full'
      },
      {
        path:'about', component:AboutComponent
      },
      {
        path:'courses', component:CoursesComponent
      },
      {
        path:'contact', component:ContactComponent
      },
      {
        path:'home', component:HeaderComponent
      },
      {
        path:'footer', component:FooterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
