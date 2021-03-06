import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})

export class RegisterComponent {
  loading= false;
  error:string;
  public statusMessage;
  public status;
  constructor(private afAuth: AngularFireAuth, private router: Router, private apiserviceService: ApiserviceService) { }
  
  ngOnInit(){
  }

  async onSubmit(form: NgForm){
    this.loading = true;
    this.error = null;
    const [ email, password, firstname, ryderid, lastname, passwordRepeat, city ] = form.value;

    try {
      if(form.value.firstname == "" || form.value.ryderid == "" || form.value.lastname == ""  || form.value.city == ""){
        this.status = "Form is missing values!";
        console.log("Form is missing values!");
        return;
       }
      if(form.value.passwordRepeat != form.value.password){
        this.status = "Passwords dont match!";
        console.log("Passwords dont match!");
        return;
      }
      const resp = await this.afAuth.createUserWithEmailAndPassword(form.value.email, form.value.password);
      await resp.user.updateProfile({ displayName: form.value.firstname });
      // register user in mysql db if successfull

      this.apiserviceService.registerUser(form.value).subscribe((data: {}) => {
        this.statusMessage = data;
        
        this.status = this.statusMessage.status;
        console.log("show status", this.status);
        if(this.status == "registered"){
          localStorage.setItem("registeredStatus","true");
        }else{
          localStorage.setItem("registeredStatus","false");
        }
        
      });
     // form.reset();
      const uid = resp.user.uid;
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error.message);
      this.error = error.message;
      this.status = this.error;
    }
    this.loading = false;
  }
}

interface statusMessage{
  status: string;
}