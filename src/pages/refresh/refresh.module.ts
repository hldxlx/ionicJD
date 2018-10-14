import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefreshPage } from './refresh';

@NgModule({
  declarations: [
    RefreshPage,
  ],
  imports: [
    IonicPageModule.forChild(RefreshPage),
  ],
})
export class RefreshPageModule {}
