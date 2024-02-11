import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  // standalone: true,
  // imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  form: FormGroup = this.fb.group({
    to_name: ['Admin', Validators.required],
    name: ['', Validators.required],
    message: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Merci de renseigner tous les champs.',
        customClass: {
          confirmButton: 'swal2-confirm-custom'
        }
      });
      return;
    }

    emailjs.init('QVkke_lEDn3Cgyqnh');
    try {
      let response = await emailjs.send("service_4vw77ar", "template_wcsq2uk", {
        to_name: "Admin",
        from_name: this.form.value.name,
        message: this.form.value.message,
        email: this.form.value.email,
        subject: this.form.value.subject,
      });

      Swal.fire({
        title: 'Envoyé!',
        text: 'Merci pour votre message.',
        icon: 'success',
        customClass: {
          confirmButton: 'swal2-confirm-custom'
        }
      });
      this.form.reset();
      this.form.get('to_name')?.setValue('Admin');
      // this.form.get('objet')?.setValue('');

    } catch (error: any) {
      console.error('Error sending email:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur...',
        text: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.',
        customClass: {
          confirmButton: 'swal2-confirm-custom'
        }
      });
    }
  }

}
