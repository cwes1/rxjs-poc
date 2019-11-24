import { Injectable } from '@angular/core';
import { StarWarsApiService } from './star-wars-api.service';
import { IViewModel } from 'src/models/iviewmodel';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViewmodelService {

  constructor(private swapiService: StarWarsApiService) { }

  getData(id: number): Observable<IViewModel> {

    let viewModel = {} as IViewModel;

    this.swapiService.getPersonById().subscribe(response => {
      viewModel.person = response;
    });

    this.swapiService.getPlanetById().subscribe(response => {
      viewModel.planet = response;
    });

    this.swapiService.getStarshipById().subscribe(response => {
      viewModel.starship = response;
    });

    return of(viewModel);
  }

}
