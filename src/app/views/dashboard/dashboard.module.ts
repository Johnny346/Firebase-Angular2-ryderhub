import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule, BaseChartDirective } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { environment } from '../../../environments/environment';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule }from '@angular/fire/auth';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  declarations: [ DashboardComponent ],
  providers: [
    BaseChartDirective
  ]
})
export class DashboardModule { }
