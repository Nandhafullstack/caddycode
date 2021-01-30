import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }


  menus: any = [
    { "name": "Home", "url": "home" },
    { "name": "About Us", "url": "about-us" },
    { "name": "Business", "url": "business" },
    { "name": "How it works", "url": "how-it-works" },
    { "name": "Blog", "url": "blog" },
    { "name": "Gallery", "url": "gallery" },
    { "name": "Contact Us", "url": "contact-us" },
    { "name": "FAQ", "url": "faq" },
    { "name": "Signup", "url": "signup" },
    { "name": "Login", "url": "login" }
  ]

  menuLink(url: any) {
    this.router.navigate([`${url}`])
  }
}
