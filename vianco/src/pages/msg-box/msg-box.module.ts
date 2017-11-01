import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsgBoxPage } from './msg-box';

@NgModule({
  declarations: [
    MsgBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(MsgBoxPage),
  ],
})
export class MsgBoxPageModule {}
