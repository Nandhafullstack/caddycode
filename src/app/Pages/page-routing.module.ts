import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BusinessComponent } from './business/business.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'}
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: {title: 'About Us'}
  },
  {
    path: 'business',
    component: BusinessComponent,
    data: {title: 'Business'}
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
    data: {title: 'How it works'}
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {title: 'Blog'}
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: {title: 'Gallery'}
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: {title: 'Contact Us'}
  },
  {
    path: 'faq',
    component: FaqComponent,
    data: {title: 'FAQ'}
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {title: 'Signup'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {title: 'Login'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
