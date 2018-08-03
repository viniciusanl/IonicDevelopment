import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { HomePage } from './home';

@NgModule({
  imports: [IonicPageModule.forChild(HomePage)],
  exports: [],
  declarations: [HomePage],
  providers: [],
})
export class NameModule { }
