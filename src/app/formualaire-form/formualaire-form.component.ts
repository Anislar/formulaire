import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-formualaire-form',
  templateUrl: './formualaire-form.component.html',
  styleUrls: ['./formualaire-form.component.scss']
})
export class FormualaireFormComponent implements OnInit {

  formulaireForm = new FormGroup({
   username: new FormControl('', Validators.required),
   email : new FormControl('',[Validators.required, Validators.email]),
   password : new FormControl('',[Validators.required,Validators.minLength(6)])
 })
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    
      console .log(this.formulaireForm.value);
  }

}
