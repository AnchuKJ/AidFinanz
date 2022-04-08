import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicantdetails',
  templateUrl: './applicantdetails.component.html',
  styleUrls: ['./applicantdetails.component.scss']
})
export class ApplicantdetailsComponent implements OnInit {

  constructor(private controlContainer: ControlContainer) { }
  applicantFormGroup:FormGroup;
  
  state= ['Texas', 'Mississippi', 'Nebraska', 'Alaska', 'Wisconsin', 'Washington', 'North_Calorina', 
  'Illinois', 'Indiana', 'Minnesota', 'Missouri', 'Idaho', 'Arizona', 'Florida', 'Pennsylvania', 
  'Delaware', 'New_York', 'New_Mexico', 'Louisiana', 'California', 'Utah', 'New_Hampshire', 
  'Ohio', 'Maryland', 'Kentucky', 'Conneticut', 'Arkansas', 'Colorado'
  ];

  ngOnInit(): void {
    this.applicantFormGroup = <FormGroup>this.controlContainer.control;  
  }

}
