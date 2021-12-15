import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl } from "@angular/forms";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // @HostBinding('class') className = '';
  // toggleControl = new FormControl(false);
  sidebarLinks = [{
    icon: "assets/dashboard-icon.svg", route: "/dashboard", title: "Dashboard"
  },
  {
    icon: "assets/people-icon.svg", route: "/employees", title: "Employees"
  },
  {
    icon: "assets/payment-icon.svg", route: "/payments", title: "Payments"
  },
  {
    icon: "assets/task-icon.svg", route: "/tasks", title: "Tasks"
  },
  {
    icon: "assets/client-icon.svg", route: "/clients", title: "Clients"
  }

  ]


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router, private overlay: OverlayContainer) { }

  ngOnInit() {
    // this.toggleControl.valueChanges.subscribe((darkMode) => {
    //   const darkClassName = 'theme-alternate';
    //   this.className = darkMode ? darkClassName : '';
    //   if (darkMode) {
    //     this.overlay.getContainerElement().classList.add(darkClassName);
    //   } else {
    //     this.overlay.getContainerElement().classList.remove(darkClassName);
    //   }
    // });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
