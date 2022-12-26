import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'contactForm',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  ngOnInit(): void {
  }

  contactForm: FormGroup;

  constructor(private httpclien: HttpClient) {

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
   })

  //  this.enviarCorreo()
  }


  // enviarCorreo():any {

  //   const response = {
  //     name: this.contactForm.value.name,
  //     email: 'kintalgonzalo40@gmail.com',
  //     message: this.contactForm.value.message
  //   }

  //   console.log(response)
    
  // }


  get email(){
    return this.contactForm.get("email");
  }

  get name(){
    return this.contactForm.get("name");
  }

}
