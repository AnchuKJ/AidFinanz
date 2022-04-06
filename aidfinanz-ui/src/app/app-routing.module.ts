import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanregComponent } from './loanreg/loanreg.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'loanreg',
    pathMatch:'full'
  },
  {
    path:'loanreg',
    component:LoanregComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
