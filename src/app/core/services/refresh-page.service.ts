import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshPageService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  refresh() {
    const currentUrl = this.route.url
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([currentUrl])
  }
}
