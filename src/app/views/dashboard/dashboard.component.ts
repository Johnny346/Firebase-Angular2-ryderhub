import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AngularFireAuth } from '@angular/fire/auth';
import { ApiserviceService } from '../../apiservice.service';
import { WeatherdataObject } from '../../weatherdata-object';
@Component({
  templateUrl: 'dashboard.component.html'
  
})
export class DashboardComponent implements OnInit {
  public mondayavghours = '90%';
  constructor(public afAuth: AngularFireAuth, public apiService: ApiserviceService){};

  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';

// barChart
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];
public barChartType = 'bar';
public barChartLegend = true;

public barChartData: any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Orders'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Earnings'}
];
  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 500;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Orders'
    },
    {
      data: this.mainChartData2,
      label: 'Hours'
    },
    {
      data: this.mainChartData3,
      label: 'Earnings'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(150 / 3),
          max: 130
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  public ryderdata;
  public ryderID;
  public totalIncome = 0;
  public totalHours = 0;
  public avgWeeklyPay = 0;
  public avgDailyOrders = 0;
  public userstartDate = 0;
  public avgDailyHours = 0;
  public avgHourlyEarnings = 0;
  public avgDailyOrdersSunday = 0;
  public avgDailyOrdersMonday = 0;
  public avgDailyOrdersTuesday = 0;
  public avgDailyOrdersWednesday = 0;
  public avgDailyOrdersThursday = 0;
  public avgDailyOrdersFriday = 0;
  public avgDailyOrdersSaturday = 0;
  
  public AvgIncomeSunday = 0;
  public AvgIncomeMonday = 0;
  public AvgIncomeTuesday = 0;
  public AvgIncomeWednesday = 0;
  public AvgIncomeThursday = 0;
  public AvgIncomeFriday = 0;
  public AvgIncomeSaturday = 0;

  public DataDailyOrders;
  public dataDailyOrders;
  public DataDailyHours;
  public DataDailyEarnings;
  public earliestWorkDate;
  public newestWorkDate;
  public weatherData;
  public description;
  public products;
  public RootObject;
  public temp;
  public windSpeed;
  public windDegrees;
  public region;
  public sunset;
  public sunrise;
  public weatherdata:WeatherdataObject  =  <WeatherdataObject>{};
  public todayDate;
  public WeeklyOrder;
  public ItemsArrayInvoice = [];
  public InvoiceArray;
  public ItemsArray = [];
  

  ngOnInit(): void {
      //this.ItemsArray.ID = 22;
      //this.ItemsArray = [{ID: 777, Date: new Date().getTime(), type: 'text', value: 'Hallo Welt!', sent: new Date().getTime(), delivered: 0, read: 0},
      //{ID: 888, time: new Date().getTime(), type: 'text', value: 'Hallo Welt!', sent: new Date().getTime(), delivered: 0, read: 0}];
      
      //this.ItemsArray.push
      var userEmail = localStorage.getItem('userEmail');
      // get user data from api
      this.apiService.getData(userEmail).subscribe((data: {}) => {
      this.ryderdata = data;
      //console.log("show data", this.ryderdata.id);
      this.ryderID = this.ryderdata.id;
      localStorage.setItem("ryderID",this.ryderID);
      this.totalIncome = this.ryderdata.totalIncome;
      this.totalHours = this.ryderdata.totalHours;
      this.avgWeeklyPay = this.ryderdata.avgWeeklyPay;
      this.avgDailyOrders = this.ryderdata.avgDailyOrders;
      this.earliestWorkDate = this.ryderdata.earliestWorkDate;
      this.newestWorkDate = this.ryderdata.newestWorkDate;
      this.dataDailyOrders = this.ryderdata.DataDailyOrders;
      this.DataDailyHours = this.ryderdata.DataDailyHours;
      this.DataDailyEarnings = this.ryderdata.DataDailyEarnings;
      this.avgDailyHours = this.ryderdata.avgDailyHours;
      this.avgHourlyEarnings = this.ryderdata.avgHourlyEarnings;
      
      this.InvoiceArray = this.ryderdata.Invoice;
        
     if(this.InvoiceArray.length > 0){
      for (let i = 0; i <= this.InvoiceArray.length; i++) {
        try{
          
          this.ItemsArray = ( [{ID: this.InvoiceArray[i].ID, Date: this.InvoiceArray[i].Date, Dropfees: this.InvoiceArray[i].Dropfees, Tips: this.InvoiceArray[i].Tips, Total: this.InvoiceArray[i].Total}]);
         
          this.ItemsArrayInvoice.push(this.ItemsArray);
           
        }catch(error){

        } 
      }
    }
      
      //console.log("this.InvoiceArray[i].ID", this.ItemsArrayInvoice);
      this.avgDailyOrdersSunday = this.ryderdata.avgDailyOrdersSunday;
      this.avgDailyOrdersMonday = this.ryderdata.avgDailyOrdersMonday;
      this.avgDailyOrdersTuesday = this.ryderdata.avgDailyOrdersTuesday;
      this.avgDailyOrdersWednesday = this.ryderdata.avgDailyOrdersWednesday;
      this.avgDailyOrdersThursday = this.ryderdata.avgDailyOrdersThursday;
      this.avgDailyOrdersFriday = this.ryderdata.avgDailyOrdersFriday;
      this.avgDailyOrdersSaturday = this.ryderdata.avgDailyOrdersSaturday;

      this.AvgIncomeSunday = this.ryderdata.AvgIncomeSunday;
      this.AvgIncomeMonday = this.ryderdata.AvgIncomeMonday;
      this.AvgIncomeTuesday= this.ryderdata.AvgIncomeTuesday;
      this.AvgIncomeWednesday = this.ryderdata.AvgIncomeWednesday;
      this.AvgIncomeThursday = this.ryderdata.AvgIncomeThursday;
      this.AvgIncomeFriday = this.ryderdata.AvgIncomeFriday;
      this.AvgIncomeSaturday = this.ryderdata.AvgIncomeSaturday;
    // console.log("AvgIncomeSunday",this.AvgIncomeSunday);
      //console.log("show this.newestWorkDate",  this.DataDailyOrders.length);
     // generate random values for mainChart
     //style progress bar orders width
     const elementOrdersMonday = document.getElementById('monday-progBar-orders');
     elementOrdersMonday.style.width = this.avgDailyOrdersMonday + '%';
     const elementOrdersTuesday = document.getElementById('tuesday-progBar-orders');
     elementOrdersTuesday.style.width = this.avgDailyOrdersTuesday + '%';
     const elementOrdersWednesday = document.getElementById('wednesday-progBar-orders');
     elementOrdersWednesday.style.width = this.avgDailyOrdersWednesday + '%';
     const elementOrdersThursday = document.getElementById('thursday-progBar-orders');
     elementOrdersThursday.style.width = this.avgDailyOrdersThursday + '%';
     const elementOrdersFriday = document.getElementById('friday-progBar-orders');
     elementOrdersFriday.style.width = this.avgDailyOrdersFriday + '%';
     const elementOrdersSaturday = document.getElementById('saturday-progBar-orders');
     elementOrdersSaturday.style.width = this.avgDailyOrdersSaturday + '%';
     const elementOrdersSunday = document.getElementById('sunday-progBar-orders');
     elementOrdersSunday.style.width = this.avgDailyOrdersSunday + '%';

     
     const elementEarningsMonday = document.getElementById('monday-progBar-earnings');
     elementEarningsMonday.style.width = this.AvgIncomeMonday + '%';
     const elementEarningsTuesday = document.getElementById('tuesday-progBar-earnings');
     elementEarningsTuesday.style.width = this.AvgIncomeTuesday + '%';
     const elementEarningsWednesday = document.getElementById('wednesday-progBar-earnings');
     elementEarningsWednesday.style.width = this.AvgIncomeWednesday + '%';
     const elementEarningsThursday = document.getElementById('thursday-progBar-earnings');
     elementEarningsThursday.style.width = this.AvgIncomeThursday + '%';
     const elementEarningsFriday = document.getElementById('friday-progBar-earnings');
     elementEarningsFriday.style.width = this.AvgIncomeFriday + '%';
     const elementEarningsSaturday = document.getElementById('saturday-progBar-earnings');
     elementEarningsSaturday.style.width = this.AvgIncomeSaturday + '%';
     const elementEarningsSunday = document.getElementById('sunday-progBar-earnings');
     elementEarningsSunday.style.width = this.AvgIncomeSunday + '%';
     //console.log("show this.newestWorkDate",this.dataDailyOrders[33].weeklyOrders[0]);
    for (let i = 0; i <= this.dataDailyOrders.length; i++) {
        try{
          this.mainChartData1.push(this.dataDailyOrders[i].weeklyOrders);
          this.mainChartData2.push(this.DataDailyHours[i].hours);
          this.mainChartData3.push(this.DataDailyEarnings[i].pay);
          //console.log("show this.newestWorkDate", this.dataDailyOrders[i].weeklyOrders);
        }catch(error){

        } 
      }
    })
     
   
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
      this.totalHours = this.ryderdata.totalHours;
      this.avgWeeklyPay = this.ryderdata.avgWeeklyPay;
      this.avgDailyOrders = this.ryderdata.avgDailyOrders;
      this.earliestWorkDate = this.ryderdata.earliestWorkDate;
      this.newestWorkDate = this.ryderdata.newestWorkDate;
      this.dataDailyOrders = this.ryderdata.DataDailyOrders;
      this.DataDailyHours = this.ryderdata.DataDailyHours;
      this.DataDailyEarnings = this.ryderdata.DataDailyEarnings;
      //console.log("show this.newestWorkDate",  this.DataDailyOrders.length);
     // generate random values for mainChart
     
     //console.log("show this.newestWorkDate",this.dataDailyOrders[33].weeklyOrders[0]);
     
     try{ 
      for (let i = 0; i <= this.dataDailyOrders.length; i++) {
        this.mainChartData1.push(this.dataDailyOrders[i].weeklyOrders);
        this.mainChartData2.push(this.DataDailyHours[i].hours);
        this.mainChartData3.push(this.DataDailyEarnings[i].pay);
        //console.log("show this.newestWorkDate", this.dataDailyOrders[i].weeklyOrders);
      }
   
    console.log("show ", typeof(this.mainChartData1));
    }catch(error){

        } 
    })
    this.updateChart(this.mainChartData1,this.mainChartData2,this.mainChartData3);
  }

  updateChart(orders,hours,earnings){
    this.mainChartData1 = [];
    this.mainChartData2 = [];
    this.mainChartData3 = [];
    console.log("show lnt", orders.length);
    this.mainChartLabels = [];
    for (let i = 0; i <= orders.length; i++) {
      //console.log("show lnt", i);
      this.mainChartLabels.push("d");
    }
        setTimeout(() => {
              
              this.mainChartData= [
            {data: [], label: ''},
            {data: orders, label: 'Orders'},
            {data: hours, label: 'Hours'},
            {data: earnings, label: 'Earnings'},
            
            ];
        }, 0)
  }
  
  getWeatherData(){
    this.apiService.getWeatherData().subscribe((data: {}) => {
      this.RootObject = data;
     this.description = this.RootObject.weather[0].description;
     this.temp = this.RootObject.main.temp;
     this.windSpeed = this.RootObject.wind.speed;
     this.windDegrees = this.RootObject.wind.deg;
     this.region = this.RootObject.sys.country;
		this.sunrise = getTime(this.RootObject.sys.sunrise);
		this.sunset = getTime(this.RootObject.sys.sunset);
        
    function getTime(unix_timestamp){
          var date = new Date(unix_timestamp *1000);
          // Hours part from the timestamp
          var hours = date.getHours();
          // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes();
          // Seconds part from the timestamp
          var seconds = "0" + date.getSeconds();
          
          // Will display time in 10:30:23 format
          var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        
          return date.getHours()+":"+date.getMinutes();
      }
     });

     var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      this.todayDate = mm + '/' + dd + '/' + yyyy;

  }
}
export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface RootObject {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}
interface ryderdata {
  ryderID: string;
  totalIncome: string;
  totalHours: string;
  avgWeeklyPay: string;
  avgDailyOrders: string;
  avgDailyHours: string;
  avgHourlyEarnings: string;
  avgDailyOrdersSunday: string;
  avgDailyOrdersMonday: string;
  avgDailyOrdersTuesday: string;
  avgDailyOrdersWednesday: string;
  avgDailyOrdersThursday: string;
  avgDailyOrdersFriday: string;
  avgDailyOrdersSaturday: string;
  
  AvgIncomeSunday: string;
  AvgIncomeMonday: string;
  AvgIncomeTuesday: string;
  AvgIncomeWednesday: string;
  AvgIncomeThursday: string;
  AvgIncomeFriday: string;
  AvgIncomeSaturday: string;

  userstartDate: string;
  newestWorkDate: string;
  Invoice: invoice[];
  DataDailyOrders: dataDailyOrders[];
  DataDailyHours: [];
  DataDailyEarnings: [];
} 

interface dataDailyOrders {
  weeklyOrders: WeeklyOrder;
}

interface WeeklyOrder {
  weeklyOrders: {
    weeklyOrders: string;
  }
}
interface DataDailyHours {
  hours: string;
}
interface DataDailyEarnings {
  pay: string;
}

export interface invoice  
 {
  ID: string;
  Date:string;
  Dropfees:string;
  Tips:string;
  Total:string;
}
/*
export interface invoice extends Array<invoice> 
 {
  ID: number;
  Date:string;
  Dropfees:number;
  Tips:number;
  Total:number;
}

*/