import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private firebase: AngularFireDatabase) { }
  contactFormList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', Validators.required),
    message: new FormControl('', [Validators.required, Validators.maxLength(300)]),
  });

  getContactForm() {
    this.contactFormList = this.firebase.list('contactForm');
    return this.contactFormList.snapshotChanges();
  }

  insertContactForm(contactForm) {
    this.contactFormList.push({
      firstName: contactForm.firstName,
      lastName: contactForm.lastName,
      phoneNumber: contactForm.phoneNumber,
      email: contactForm.email,
      message: contactForm.message
    });
  }
}
