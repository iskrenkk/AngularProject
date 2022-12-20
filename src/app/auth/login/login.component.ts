import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

    loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(`[A-za-z0-9/\\S]{6,}@gmail.com|[A-za-z0-9/\\S]{6,}@gmail.bg`)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });

    loginHandler(): void{
      this.loginForm.reset();
    }
  }


