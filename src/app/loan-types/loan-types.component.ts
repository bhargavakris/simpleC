import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loan-types',
  templateUrl: './loan-types.component.html',
  styleUrls: ['./loan-types.component.scss']
})
export class LoanTypesComponent implements OnInit {

  addLoanTypesForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   /*this.addLoanTypesForm = new FormGroup({
      'loanName': new FormControl(),
      'loanDescription': new FormControl(),
      'loanType': new FormControl()
    })*/
     this.addLoanTypesForm = this.fb.group({
      'loanName': new FormControl(),
      'loanDescription': new FormControl(),
      'loanType': new FormControl()
    })
  }
  addLoanType(){
    console.log(this.addLoanTypesForm.value);
  }

}
