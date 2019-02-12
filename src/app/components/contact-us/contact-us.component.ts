import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../shared/services/contact-us/contact-us.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactUsService: ContactUsService, private toastr: ToastrService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.contactUsService.form.controls;

  ngOnInit() {
    this.contactUsService.getContactForm();
  }

  onSubmit() {
    this.contactUsService.insertContactForm(this.contactUsService.form.value);
    this.toastr.success('Successfully submitted. We will contact you shortly.');
  }

  onReset() {
    this.contactUsService.form.reset();
  }
}
