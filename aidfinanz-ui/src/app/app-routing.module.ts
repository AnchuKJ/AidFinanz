import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoandetailsComponent } from './loandetails/loandetails.component';

const routes: Routes = [  
  {
    path:'',
    component:LoandetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
