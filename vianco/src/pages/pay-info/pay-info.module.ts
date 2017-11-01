import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayInfoPage } from './pay-info';

@NgModule({
  declarations: [
    PayInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PayInfoPage),
  ],
})
export class PayInfoPageModule {}
