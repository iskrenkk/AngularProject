import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { sameValueGroupValidator } from 'src/app/shared/passwords.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
  username: ['', [Validators.required, Validators.minLength(5)]],
  email: ['', [Validators.required, Validators.pattern(`[A-za-z0-9/\\S]{6,}@gmail.com|[A-za-z0-9/\\S]{6,}@gmail.bg`)]],
  telephone: [],
  passwords: this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    confirmPassword: ['']
  }, {
     validators: [sameValueGroupValidator('password', 'confirmPassword')]
  })
});

registerHandler(): void{
this.registerForm.reset();
}

}
