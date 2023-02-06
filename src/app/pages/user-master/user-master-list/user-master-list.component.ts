import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { Router } from '@angular/router';
 

@Component({
  selector: 'ngx-user-master-list',
  styleUrls: ['./user-master-list.component.scss'],
  templateUrl: './user-master-list.component.html',
})
 
export class UserMasterListComponent {
  
  constructor(private service: SmartTableData, private router: Router) {
    const data = this.service.getData();
    console.log(data)
    this.source.load(data);

  }
  settings = {
    mode:'external',
    hideHeader:true,
    actions:{
      title:"Edit",
      position:"right",
      add:false,
      edit:true,
      delete:false
    },
    
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    
    columns: {
      id: {
        title: 'Emp ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      age: {
        title: 'Age',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();



  onEdit(event){
    this.router.navigate(['/pages/user/edit']);
  }
 
}
