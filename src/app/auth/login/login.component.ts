import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  public isLoginPage: boolean
  error: string
  isLoading: boolean



  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });

    this.registerForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      position: ["Human Resources"]
    })
  }

  ngOnInit() {
    this.isLoginPage = true;
    if (window.localStorage.getItem("Token")) {
      this.router.navigate(["/dashboard"])
    }
  }



  onLoginSubmit() {
    this.isLoading = true
    const formData = this.loginForm.value
    return this.authService.login(formData.email, formData.password).subscribe({

      next: (data: any) => {
        this.isLoading = false
        console.log(data)
        this.router.navigate(["/dashboard"])
        window.localStorage.setItem("username", data?.user.username)
        return window.localStorage.setItem("Token", data.accessToken)
      },

      error: (err) => {
        // we might want ot do something with err, but for now we send an ambigious response to the client for security reasons.
        this.isLoading = false
        window.localStorage.removeItem("Token") // removes token if its stored in localStorage
        return this.error = "Email or Password is incorrect";
      }
    }
    );
  }
  onRegisterSubmit() {
    this.isLoading = true
    const formData = this.registerForm.value
    return this.authService.register(formData).subscribe(
      {
        next: (data: any) => {
          this.isLoading = false
          window.localStorage.setItem("username", data?.user.username)
          window.localStorage.setItem("Token", data.accessToken)
          this.router.navigate(["/dashboard"])
        },
        error: (err) => {
          this.isLoading = false;
          this.error = err
        }
      }
    )
  }
}
