import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
 ngOnInit(): void {
    this.loadParticles();
  }

  loadParticles(): void {
    if (typeof particlesJS === 'undefined') {
      console.error('particlesJS is not defined.');
      return;
    }

    particlesJS.load('particles-js', 'assets/ParticlesCrud.json', () => {
      console.log('Particles.js loaded with config.');
    });
  }

}
