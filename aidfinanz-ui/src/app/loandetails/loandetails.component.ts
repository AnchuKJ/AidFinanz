import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AidfinanzService } from '../aidfinanz.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.scss']
})
export class LoandetailsComponent implements OnInit {

  subtitle:string;
  applicantFormGroup:FormGroup;
  documentFormGroup:FormGroup;
  applicantData:any = [];
  riskdata:any = {};
  constructor(private _formBuilder: FormBuilder, private aidfinanzSerice:AidfinanzService) {
    this.subtitle = "Please fill the form below to perform Risk Assessment";    
  }

  ngOnInit(): void {    
    this.applicantFormGroup = this._formBuilder.group({
      dob: ['', Validators.required],
      income: ['', Validators.required],
      totalExp: ['', Validators.required],
      currentExp:['', Validators.required],
      city: [''],
      state: ['']
    });

    this.documentFormGroup = this._formBuilder.group({
      house:['', Validators.required],
      maritalstatus: ['', Validators.required],
      car: ['', Validators.required],
      profession: ['']
    });
  }

  launchDocument(stepper: MatStepper){
    if(this.applicantFormGroup.valid){
      this.applicantData.dob = this.applicantFormGroup.get("dob")?.value;
      this.applicantData.income = this.applicantFormGroup.get("income")?.value;
      this.applicantData.totalExp = this.applicantFormGroup.get("totalExp")?.value;
      this.applicantData.currentExp = this.applicantFormGroup.get("currentExp")?.value;      
      stepper.next();
    }
  }

  calculateRisk(stepper:MatStepper){
    if(this.documentFormGroup.valid){
      this.applicantData.house = this.documentFormGroup.get("house")?.value;
      this.applicantData.maritalstatus = this.documentFormGroup.get("maritalstatus")?.value;
      this.applicantData.car = this.documentFormGroup.get("car")?.value;
      this.applicantData.profession = this.documentFormGroup.get("profession")?.value;
      this.subtitle='Here is your Risk Assessment result';

     /* this.aidfinanzSerice.calculateRisk(this.applicantData).subscribe(res=>{
        this.riskdata.risk = res;
        this.riskdata.interest = '6%';
      });*/
      this.riskdata.risk = 1;
      this.riskdata.interest = '6%';
      this.riskdata.income =  this.applicantData.income;
      var seed = Math.floor(this.riskdata.income/4);
      this.riskdata.incomeset = [0, seed, seed + seed];
      stepper.next();
    }
  }

  reset(stepper: MatStepper){   
    stepper.reset();
  }

}
