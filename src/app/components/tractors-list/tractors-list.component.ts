import { Component, OnInit } from '@angular/core';
import { Tractor } from 'src/app/models/tractor.model';
import { TractorService } from 'src/app/services/tractor.service';

@Component({
  selector: 'app-tractors-list',
  templateUrl: './tractors-list.component.html',
  styleUrls: ['./tractors-list.component.css']
})
export class TractorsListComponent implements OnInit {

  tractors?: Tractor[];
  currentTractor: Tractor = {};
  currentIndex = -1;
  title = '';
  //title1 = 'H2i';

  constructor(private tractorService: TractorService) { }

  ngOnInit(): void {
    this.retrieveTractors();
  }

  retrieveTractors(): void {
    this.tractorService.getAll()
      .subscribe(
        data => {
          this.tractors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTractors();
    this.currentTractor = {};
    this.currentIndex = -1;
  }

  setActiveTractor(tractor: Tractor, index: number): void {
    this.currentTractor = tractor;
    this.currentIndex = index;
  }

  removeAllTractors(): void {
    this.tractorService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {

    this.currentTractor = {};
    this.currentIndex = -1;

    this.tractorService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tractors = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
