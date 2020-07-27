import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxcalculator',
  templateUrl: './taxcalculator.component.html',
  styleUrls: ['./taxcalculator.component.css']
})
export class TaxcalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*//tax calc section
function taxCalc(income){
    console.log("tax calc running"+ income);
    
        if(income <= 33800){
    
         //income tax @ 20%
         $scope.incomeTaxT = getPerc(income,20);
         // less 1500 tax credit
        if(income > 3000){
	 $scope.incomeTax = $scope.incomeTaxT -1500;
        }else{
	  $scope.incomeTax = $scope.incomeTaxT;
	}
	 console.log("income: "+income+", tax: "+$scope.incomeTax );
 	if($scope.incomeTax <0){
	   $scope.incomeTax =  0;
	}
     }
     if(income > 33800){
         //income tax <=33800 @ 20%
         $scope.incomeTaxLower = getPerc(income,20);
        //income -33800 is taxed @ 40%
        $scope.incomeTax= getPerc(income-33800,40)+ $scope.incomeTaxLower;
    }

    if(income >=13000){
        //usc
        //12012 taxed @ 0.5%
        //next 7862 taxed @2%
        //next 50672 taxed @4.5%
        $scope.usc = getPerc(income,3);

    }else{
        $scope.usc = 0;
        }
    if(income >=5000){
        //prsi
        //all taxed @ 0.4%
        $scope.prsi= getPerc(income,4);

    }
}
    function getPerc(num, percent) {
             return ((Number(percent) / 100) * Number(num));
    }
*/