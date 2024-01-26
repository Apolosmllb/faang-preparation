import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css',
})
export class PageNotFoundComponent {
  invalidUrl: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  navigateToHome() {
    this.router.navigate(['home']).then();
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url[0].path;
  }
}
