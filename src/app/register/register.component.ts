import { Component, OnInit } from '@angular/core';
import { Customer } from '../_models/Customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister: FormGroup;
  public customer: Customer;

  constructor() {
    this.customer=new Customer();
    this.formRegister=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
    
  }

  onRegister(event: any): void{
    //event.preventDefault();
    alert(this.formRegister.get('email')?.touched+' '+this.formRegister.get('email')?.invalid);
    return;
  }

}
