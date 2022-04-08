import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { DocumentdetailsComponent } from './documentdetails/documentdetails.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { AidfinanzService } from './aidfinanz.service';

@NgModule({
  declarations: [
    AppComponent,
    LoandetailsComponent,
    DocumentdetailsComponent,
    ApplicantdetailsComponent,
    RiskassessmentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [AidfinanzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
