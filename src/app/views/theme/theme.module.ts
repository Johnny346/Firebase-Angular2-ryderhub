// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { ApiserviceService } from '../../apiservice.service';
// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { UploadinvoiceComponent } from './uploadinvoice/uploadinvoice.component';
import { FormsModule } from '@angular/forms';
import { RoadclosuresComponent } from './roadclosures/roadclosures.component';
import { TaxcalculatorComponent } from './taxcalculator/taxcalculator.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherinfoComponent } from './weatherinfo/weatherinfo.component';
@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule
  ],
  declarations: [
    ColorsComponent,
    TypographyComponent,
    UploadinvoiceComponent,
    RoadclosuresComponent,
    TaxcalculatorComponent,
    ProfileComponent,
    WeatherinfoComponent
  ],
  providers: [
    ApiserviceService
  ],
})
export class ThemeModule { }
