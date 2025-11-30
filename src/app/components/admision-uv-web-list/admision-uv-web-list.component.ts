import { Component, OnInit } from '@angular/core';
import { AdmisionUvWebService } from 'src/app/services/admision-uv-web.service';
import { map } from 'rxjs/operators';
import { Admision } from 'src/app/models/admision.model';

@Component({
  selector: 'app-admision-uv-web-list',
  templateUrl: './admision-uv-web-list.component.html',
  styleUrls: ['./admision-uv-web-list.component.css']
})
export class AdmisionUvWebListComponent implements OnInit {
  admisiones?: Admision[];
  currentAdmision?: Admision;
  currentIndex = -1;
  title = '';
  programaInteres = '';
  n = 0;

  constructor(private readonly admisionUvWebService: AdmisionUvWebService) { }

  ngOnInit(): void {
    //this.retrieveTestsByProgram('gestion');
  }

  refreshList(): void {
    this.currentAdmision = undefined;
    this.currentIndex = -1;
    //this.retrieveTests();
  }

  retrieveAdmisionesByProgram(): void {
    //lert(this.programaInteres)
    this.admisionUvWebService.getByProgram(this.programaInteres).snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.admisiones = data;
      this.n = this.admisiones.length;
    });
  }


  retrieveTests(): void {
    this.admisionUvWebService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.admisiones = data;
    });
  }

  setActiveTest(admision: Admision, index: number): void {
    this.currentAdmision = admision;
    this.currentIndex = index;
  }
}