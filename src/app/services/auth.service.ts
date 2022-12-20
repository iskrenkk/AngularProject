import { Injectable } from '@angular/core';
import { IAuthUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: IAuthUser | null = null;


  get isLoggedIn() {
   return this.user !== null;
  }

  login(username: string, password:string) {
    
  }
}
