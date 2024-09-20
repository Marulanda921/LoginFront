import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-crud-particles',
  templateUrl: './crud-particles.component.html',
  styleUrls: ['./crud-particles.component.css']
})
export class CrudParticlesComponent implements OnInit {

  ngOnInit(): void {
    this.loadParticles();
  }

  loadParticles(): void {
    if (typeof particlesJS === 'undefined') {
      console.error('particlesJS is not defined.');
      return;
    }

    particlesJS.load('particles-js', 'assets/particlesjs-config.json', () => {
      console.log('Particles.js loaded with config.');
    });
  }

}
