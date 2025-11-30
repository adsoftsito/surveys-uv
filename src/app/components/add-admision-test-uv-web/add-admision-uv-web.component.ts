import { Component } from '@angular/core';
import { Admision } from 'src/app/models/admision.model';
import { AdmisionUvWebService } from 'src/app/services/admision-uv-web.service';

@Component({
  selector: 'app-admision-uv-web',
  templateUrl: './add-admision-uv-web.component.html',
  styleUrls: ['./add-admision-uv-web.component.css'],
})
export class AddAdmisionUvWebComponent {
  admision: Admision = new Admision();
  submitted = false;

  constructor(private readonly admisionUvWebService: AdmisionUvWebService) {}

  saveTest(): void {
    if (
      !this.admision.appPaterno ||
      !this.admision.appMaterno ||
      !this.admision.nombre ||
      !this.admision.programaInteres ||
      (this.admision.programaInteres === 'other' && !this.admision.otroPrograma) ||
      !this.admision.bachilleratoProcedencia ||
      (this.admision.bachilleratoProcedencia === 'other' &&
        !this.admision.otroBachillerato) ||
      !this.admision.telefono ||
      !this.admision.email ||
      !this.admision.facebook
    ) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    this.submitted = true;
    this.admisionUvWebService.create(this.admision).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newAdmision(): void {
    this.submitted = false;
    this.admision = new Admision();
  }
}
