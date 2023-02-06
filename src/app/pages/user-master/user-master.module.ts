import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './user-master-routing.module';
import { UserMasterComponent } from './user-master.component';
import { UserMasterListComponent } from './user-master-list/user-master-list.component';
import { UserMasterFormComponent } from './user-master-form/user-master-form.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

 
import { FormsModule as ngFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    UserMasterComponent,
    UserMasterListComponent,
    UserMasterFormComponent
 
  ],
})
export class UserMasterModule { }
