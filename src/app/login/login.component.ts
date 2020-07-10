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
  constructor(private afAuth: AngularFireAuth, private router: Router) { };
  error:string;

  ngOnInit(): void {
  }
  async onSubmit(form: NgForm){
    this.error = null;
    this.loading = true;
    const [ email, password, firstname, ryderid, lastname ] = form.value;
    let resp;
    try {
      console.log(form.value);
      resp = await this.afAuth.signInWithEmailAndPassword(form.value.email, form.value.password);
      form.reset();
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }
    this.loading = false;
  }
}
