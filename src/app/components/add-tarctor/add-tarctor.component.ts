import { Component, OnInit } from '@angular/core';
import { Tractor } from 'src/app/models/tractor.model';
import { TractorService } from 'src/app/services/tractor.service';

@Component({
  selector: 'app-add-tarctor',
  templateUrl: './add-tarctor.component.html',
  styleUrls: ['./add-tarctor.component.css']
})
export class AddTractorComponent implements OnInit {

  //title = 'EBarn test app';

  tractor: Tractor = {
    title: '',
  };
  submitted = false;

  constructor(private tractorService: TractorService) { }

  ngOnInit(): void {
  }

  saveTractor(): void {
    const data = {
      title: this.tractor.title,
    };

    this.tractorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTractor(): void {
    this.submitted = false;
    this.tractor = {
      title: '',
    };
  }

}
