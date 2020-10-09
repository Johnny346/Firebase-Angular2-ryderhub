import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiserviceService } from '../../../apiservice.service';
@Component({
  selector: 'app-taxcalculator',
  templateUrl: './taxcalculator.component.html',
  styleUrls: ['./taxcalculator.component.css']
})
export class TaxcalculatorComponent implements OnInit {

    constructor(public afAuth: AngularFireAuth, public apiService: ApiserviceService){};
    public ryderdata;
    public ryderID;
    public totalIncome = 0;
    public earliestWorkDate;
    public newestWorkDate;
    public prsi = 0;
    public usc = 0;
    public netpay = 0;
    public incomeTax  = 0;
    public taxCredit = 1500;

    ngOnInit(): void {
        var userEmail = localStorage.getItem('userEmail');
        // get user data from api
        this.apiService.getData(userEmail).subscribe((data: {}) => {
        this.ryderdata = data;
        //console.log("show data", this.ryderdata.id);
        this.ryderID = this.ryderdata.id;
        localStorage.setItem("ryderID",this.ryderID);
        this.totalIncome = this.ryderdata.totalIncome;
        this.newestWorkDate = this.ryderdata.newestWorkDate;
        this.earliestWorkDate = this.ryderdata.earliestWorkDate;
        this.taxCalc(this.totalIncome); })

        
    }

    getUpdatedData(){
    
        var userEmail = localStorage.getItem('userEmail');
        var ed = new Date(this.earliestWorkDate);
        var nd = new Date(this.newestWorkDate);
        console.log("button clicked ", nd.getFullYear());
        this.apiService.getUpdatedData(userEmail,nd,ed).subscribe((data: {}) => {
          this.ryderdata = data;
          //console.log("show data", this.ryderdata.id);
          this.ryderID = this.ryderdata.id;
          localStorage.setItem("ryderID",this.ryderID);
          this.totalIncome = this.ryderdata.totalIncome;
         this.netpay = this.taxCalc(this.totalIncome);
      
        })
    
      }
//tax calc section
 taxCalc(income){
    console.log("tax calc running"+ income);
    
        if(income <= 33800){
    
         //income tax @ 20%
         this.incomeTax = this.getPerc(income,20);
         this.incomeTax =  Math.round(this.incomeTax);
         // less 1500 tax credit
        if(income > 3000){
	        this.incomeTax = this.incomeTax - this.taxCredit;
        }else{
	        this.incomeTax = this.incomeTax;
	}
	 console.log("income: "+income+", tax: "+ this.incomeTax);
 	if(this.incomeTax < 0){
        this.incomeTax =  0;
	}
     }
     if(income > 33800){
         //income tax <=33800 @ 20%
         let incomeTaxLower = this.incomeTax;
        
        //income -33800 is taxed @ 40%
        this.incomeTax  = this.getPerc(income-33800,40)+  Math.round(incomeTaxLower);
    }

    if(income >= 13000){
        //usc
        //12012 taxed @ 0.5%
        //next 7862 taxed @2%
        //next 50672 taxed @4.5%
        this.usc = this.getPerc(income,4);

    }else{
        this.usc = 0;
    }
    if(income >= 12400){
        //prsi
        //all taxed @ 0.4%
        this.prsi= this.getPerc(income,4);

    }else{
        this.prsi = 500;
    }
    let vt = this.prsi + this.usc + this.incomeTax;
    this.netpay = Math.round(vt * 100) / 100;

    if(this.usc + this.incomeTax < 500){
        this.netpay = 500;
    }
    return this.incomeTax;
}
     getPerc(num, percent) {
        return ((Number(percent) / 100) * Number(num));
    }

}


