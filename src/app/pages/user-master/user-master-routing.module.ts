import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserMasterComponent } from './user-master.component';
import { UserMasterListComponent } from './user-master-list/user-master-list.component';
import { UserMasterFormComponent } from './user-master-form/user-master-form.component';


const routes: Routes = [
  {
    path: '',
    component: UserMasterComponent,
    children: [
      {
        path: 'list',
        component: UserMasterListComponent,
      },
      {
        path: 'edit',
        component: UserMasterFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FormsRoutingModule {
}

