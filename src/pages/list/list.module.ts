import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { ListPage } from './list';

@NgModule({
  imports: [IonicPageModule.forChild(ListPage)],
  exports: [],
  declarations: [ListPage],
  providers: [],
})
export class NameModule { }
