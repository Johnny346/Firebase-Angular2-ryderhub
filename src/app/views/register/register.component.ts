import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  loading= false;
  error:string;

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  ngOnInit(){

  }
  async onSubmit(form: NgForm){
    this.loading = true;
    this.error = null;
    const [ email, password, firstname, ryderid, lastname ] = form.value;

    try {
      console.log(form.value);
      const resp = await this.afAuth.createUserWithEmailAndPassword(form.value.email, form.value.password);
      await resp.user.updateProfile({ displayName: form.value.firstname });
      
      form.reset();
      const uid = resp.user.uid;
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
    }
    this.loading = false;
  }
}
