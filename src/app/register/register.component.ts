import { Component, OnInit } from '@angular/core';
import { Customer } from '../_models/Customer';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { FieldErrorEntity } from '../_models/FieldErrorEntity';
import { ErrorEntity } from '../_models/ErrorEntity';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CustomerService]
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  customer: Customer;
  errorEntity?: ErrorEntity;

  constructor(private router: Router,
    private http: HttpClient,
    private customerService: CustomerService) {
    this.customer={} as Customer;
    this.formRegister=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  ngOnInit(): void {
    if(this.customerService.isLoggedIn()){
      this.router.navigate(['/']);
    }
  }

  onRegister(event: any): void{
    event.preventDefault();
    //alert(this.customerService.test());
    if(this.formRegister.valid){
      this.customerService.register(this.customer).subscribe({
        next: (response: any) => {
          this.customer.token=response;
          this.customerService.saveCustomer(this.customer);
        },
        error: (error: any) => {
          this.errorEntity=JSON.parse(error.error);
        }
      });
    }
    return;
  }

  getCustomerString(): String{
    return JSON.stringify(this.customer);
  }

}
