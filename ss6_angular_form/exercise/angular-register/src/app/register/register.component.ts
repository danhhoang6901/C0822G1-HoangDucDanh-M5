import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() registerSubmit = new EventEmitter();
  reactiveForm: FormGroup;
  msg = "";
  country = [{
    id: 1, name: "Đà Nẵng"
  }, {
    id: 2, name: "Hà Nội"
  }]

  constructor() {
    this.reactiveForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("\\w{5,50}@gmail.com")]),
      country: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern("[+]84\\d{9}$")])
    })
  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.reactiveForm)
    if (this.reactiveForm.valid) {
      this.registerSubmit.emit(this.reactiveForm.value)
      this.msg = "Success";
    }
  }

  get reactiveFormValue() {
    return this.reactiveForm.value;
  }

  validatePassword() {
    if (this.reactiveFormValue.password.value !== this.reactiveFormValue.confirmPassword.value) {
      return this.reactiveFormValue.confirmPassword.setErrors({'wrong': true});

    }
  };
}
