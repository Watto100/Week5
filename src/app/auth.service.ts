import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: any[] = [
    {
      id: 1,
      name: "David",
      username: "david",
      password: 'abc'
    },
    {
      id: 2,
      name: "XYZ",
      username: "xyz",
      password: 'abc'
    },
  ]

  session: any;
  constructor() { }

  login(username: string, password: string){
    let user = this.users.find((u)=>u.username===username && u.password===password);
    if(user){
      this.session = user;
      localStorage.setItem('session', JSON.stringify(this.session));
    }
    return user;
  }
}
