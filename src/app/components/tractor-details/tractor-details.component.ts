import { Component, OnInit } from '@angular/core';
import { TractorService } from 'src/app/services/tractor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tractor } from 'src/app/models/tractor.model';

@Component({
  selector: 'app-tractor-details',
  templateUrl: './tractor-details.component.html',
  styleUrls: ['./tractor-details.component.css']
})
export class TractorDetailsComponent implements OnInit {
  title = 'Angular 12 Crud';

  currentTractor: Tractor = {
    title: '',
  };
  message = '';

  constructor(
    private tractorService: TractorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTractor(this.route.snapshot.params.id);
  }

  getTractor(id: string): void {
    this.tractorService.get(id)
      .subscribe(
        data => {
          this.currentTractor = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateTractor(): void {
    this.message = '';

    this.tractorService.update(this.currentTractor.id, this.currentTractor)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tractor was updated successfully!';
          this.router.navigate(['/tractors']);
        },
        error => {
          console.log(error);
        });
  }

  deleteTractor(): void {
    this.tractorService.delete(this.currentTractor.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tractors']);
        },
        error => {
          console.log(error);
        });
  }

}
