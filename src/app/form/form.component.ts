import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = "oscar";
  lastname = "mendez";
  email = "oscar@.com";
  from = "";
  to = "";
  tickets = 0;
  price =0;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(){
    alert('Hello');
  }

}
