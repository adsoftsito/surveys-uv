import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Admisiones UV';
  esRaiz: boolean = false;
  esConsultas: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.determinarRuta();
      });
    
    // También verificar la ruta inicial
    this.determinarRuta();
  }

  determinarRuta(): void {
    const rutaActual = this.router.url;
    console.log('Ruta actual:', rutaActual);

    this.esRaiz = rutaActual === '/' || rutaActual === '';
    this.esConsultas = rutaActual.includes('list-comments');
    console.log('esRaiz:', this.esRaiz, 'esConsultas:', this.esConsultas);
    
  }
}
