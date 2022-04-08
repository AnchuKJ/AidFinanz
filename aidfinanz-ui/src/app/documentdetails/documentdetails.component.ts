import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-documentdetails',
  templateUrl: './documentdetails.component.html',
  styleUrls: ['./documentdetails.component.scss']
})
export class DocumentdetailsComponent implements OnInit {

  @ViewChild("fileupload", {static:false}) fileUpload:ElementRef;

  documentFormGroup: FormGroup;

  profession=['Elevator_Installer', 'Power Plant Dispatcher', 'Janitor', 'Detective', 'Librarian', 
  'Housemaid', 'Painter', 'Boilermaker', 'Oil_Rig_Driller', 'Field_worker', 'Miner', 'Aircraft_mehcanic', 
  'Bricklayer', 'Cop', 'Mechanic', 'telecommunications_equipment_installers', 'Farm_Rancher', 'Welder', 
  'Construction_Manager', 'Structural_Steel_Ironworkers', 'Waiter', 'Compounder', 'HVAC Technician', 
  'Power_Line_Linemen', 'Locomotive_Engineer', 'Secretary', 'Receptionist', 'Plumber', 'Technician', 
  'Delivery_worker', 'Patternmaker', 'Carpenter', 'Farmer', 'Law_clerk', 'Building_Inspector', 'Firefighter', 
  'Guard', 'Sherrif', 'Landscaper', 'Electrician', 'Truck_Driver', 'Teacher', 'Tailor', 'Automotive_Technician', 
  'First_line_supervisors', 'Construction_Laborer', 'Pharmacist', 'Security_officer', 'Gas_plant_Operator', 'Transit_Police', 'Customer_care_rep'
  ];

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.documentFormGroup = <FormGroup>this.controlContainer.control;  
  }

  public onFileUpload(){
    const fileUploadControl = this.fileUpload.nativeElement;   
    fileUploadControl.click();
  }
}
