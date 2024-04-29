import {Component, OnInit} from '@angular/core';
import {Cafe} from '../model/Cafe';
import {CafeService} from '../service/cafe.service';
@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  cafeOrigen: number = 0;
  cafeBlend: number = 0;
  constructor(private cafeService: CafeService) {}
  ngOnInit() {
    this.getCafes();
  }

  getCafes(): void {
    this.cafeService.getCafes()
      .subscribe(cafes => {
        this.cafes = cafes;
        this.obtenerCafePorTipo();
      });
  }

  obtenerCafePorTipo() {
    for (let element of this.cafes) {
      if (element.tipo == "Café de Origen") {
        this.cafeOrigen += 1;
      }
      if (element.tipo == "Blend") {
        this.cafeBlend += 1;
      }
    }
  }


}
