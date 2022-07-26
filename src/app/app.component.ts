import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges,OnDestroy,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  title = 'simpleCRM';
  page_heading="Welcome to";
  success_msg:boolean = true;
  superPower='';
  username="king";
  isDarkTheme =true;
  terms:boolean=false;
  firstname: string ='';
  customerType: number=0;
  contacts=[{
    'firstName':'bhargav',
    'lastName':'Dommaraju',
    'contactId':1234
  },
  {
    'firstName':'Dommaraju',
    'lastName':'venkata',
    'contactId':2356
  },
  {
    'firstName':'krishna',
    'lastName':'venkata',
    'contactId':5678
  }
]
  ngOnInit(): void {
    console.log('On Init');
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes');
  }
  ngDoCheck(): void {
    console.log('On Do check');
  }
 ngAfterContentInit(): void {
  console.log('On After Contet Init');
 }
 ngAfterContentChecked(): void {
  console.log('On After Content Checked');
 }
 ngAfterViewInit(): void {
  console.log('On After View Init');
 }
 ngAfterViewChecked(): void {
  console.log('On After View Checked');
 }

 addCustomer(form: NgForm){
  console.log(form.value);
  //validations
  //Data Processing
  //Call APi to save data
 }
 resetForm(form: NgForm){
  form.reset();
 }
}
