import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Customer } from '../_models/Customer'

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private customerSubject: BehaviorSubject<Customer>;
  public customer: Observable<Customer>;
  
  constructor(private router: Router,
    private http: HttpClient) {
      this.customerSubject=new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('customer')!));
      this.customer=this.customerSubject.asObservable();
  }
  
  public get customerValue(): Customer{
    return this.customerSubject.value;
  }

  public register(customer: Customer): any{
    return this.http.post(`${environment.apiUrl}/auth/register`, customer, {responseType: 'text'});
  }

  public saveCustomer(customer: Customer): Boolean{
    localStorage.setItem('customer', JSON.stringify(customer));
    return true;
  }

  public isLoggedIn(): Boolean{
    if(this.customerValue){
      if(this.isTokenExpired(this.customerValue.token!)){
        return false;
      }
      return true;
    }  
    return false;
  }

  private isTokenExpired(token: String): Boolean{
    if(token){
      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
    return true;
  }

}
