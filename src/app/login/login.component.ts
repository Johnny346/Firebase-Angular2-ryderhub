import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading= false;
  public message;
  constructor(private afAuth: AngularFireAuth, private router: Router) { };
  error:string;

  ngOnInit(): void {
    let boolRegistered = localStorage.getItem('registeredStatus');
    if(boolRegistered){
      this.message = "Welcome you are now signed up :)"
    }
  }
  async onSubmit(form: NgForm){
    this.error = null;
    this.loading = true;
    const [ email, password, firstname, ryderid, lastname ] = form.value;
    let resp;
    localStorage.setItem("userEmail",form.value.email);
    localStorage.setItem("userLoggedIn","true");
    try {
      //console.log(form.value);
      resp = await this.afAuth.signInWithEmailAndPassword(form.value.email, form.value.password);
      await resp.user.updateProfile({ displayName: form.value.email})
      form.reset();
      
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }
    this.loading = false;
  }
}
