import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { BusinessComponent } from './business/business.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AboutUsComponent, BusinessComponent, HowItWorksComponent,
    BlogComponent, GalleryComponent, ContactUsComponent, FaqComponent, SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    PageRoutingModule

  ]
})
export class PagesModule { }
