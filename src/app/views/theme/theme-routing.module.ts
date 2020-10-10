import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';
import { UploadinvoiceComponent } from './uploadinvoice/uploadinvoice.component';
import { RoadclosuresComponent } from './roadclosures/roadclosures.component';
import { TaxcalculatorComponent } from './taxcalculator/taxcalculator.component';
import { WeatherinfoComponent } from './weatherinfo/weatherinfo.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'taxcalculator',
        component: TaxcalculatorComponent,
        data: {
          title: 'Tax Calculator'
        }
      },
      {
        path: 'road-closures',
        component: RoadclosuresComponent,
        data: {
          title: 'Road closures'
        }
      },
      {
        path: 'weatherinfo',
        component: WeatherinfoComponent,
        data: {
          title: 'Weather Info'
        }
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'upload',
        component: UploadinvoiceComponent,
        data: {
          title: 'Upload Invoice'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
