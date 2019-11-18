import { Injectable } from '@angular/core';
import { StarWarsApiService } from './star-wars-api.service';
import { IViewModel } from 'src/models/iviewmodel';

@Injectable({
  providedIn: 'root'
})
export class ViewmodelService {

  constructor(private swapiService: StarWarsApiService) { }

  getData(id: number): IViewModel {

    let viewModel = {} as IViewModel;

    this.swapiService.getPersonById(id).subscribe(response => {
      viewModel.person = response;
    });

    this.swapiService.getPlanetById(id).subscribe(response => {
      viewModel.planet = response;
    });

    this.swapiService.getStarshipById(id).subscribe(response => {
      viewModel.starship = response;
    });

    return viewModel;
  }


}
