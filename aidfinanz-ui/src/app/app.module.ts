import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanregComponent } from './loanreg/loanreg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentsComponent } from './documents/documents.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { RiskassessmentComponent } from './riskassessment/riskassessment.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { AngularGradientProgressbarModule } from 'angular-gradient-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    LoanregComponent,
    DocumentsComponent,
    ApplicantComponent,
    RiskassessmentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    AngularGradientProgressbarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
