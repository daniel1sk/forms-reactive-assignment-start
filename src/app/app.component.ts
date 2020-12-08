import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup
  statuses: string[] = ['Stable', 'Critical', 'Finished']
  forbiddenUsernames: string [] = ['Test']

  constructor() {}

  ngOnInit (){
    this.projectForm = new FormGroup({
      'projectName': new FormControl (null, [Validators.required, this.isNameForbidden.bind(this)]),
      'email': new FormControl (null, [Validators.required, Validators.email]),
      'status': new FormControl ('Stable')
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  isNameForbidden(control: FormControl): {[s:string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    else {return null}
  }
}
