import { Component, OnInit } from '@angular/core';
import { IViewModel } from 'src/models/iviewmodel';
import { ViewmodelService } from 'src/services/viewmodel.service';
import { Observable } from 'rxjs';
import { IPlanet } from 'src/models/iplanet';
import { StarWarsApiService } from 'src/services/star-wars-api.service';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'rxjs-poc';
  viewModelObservable: Observable<IViewModel>;
  planetObservable: Observable<IPlanet>;
  planetUpperObservable: Observable<IPlanet>;

  constructor(private service: ViewmodelService, 
              private swapiService: StarWarsApiService){}
  
  ngOnInit() {
    this.getViewModel();
    this.getPlanet();
    this.getUpper();
  }

  getPlanet() {
    this.planetObservable = this.swapiService.getPlanetById()
          .pipe(map(response => { return response; }));
  }

  getViewModel() { 
    this.viewModelObservable = this.service.getData(1)
          .pipe(map(response => { return response; }));
  }

  getUpper() { 
    this.planetUpperObservable = this.swapiService.getUpperPlanetName()
          .pipe(map(response => {return response; }));
  }

}
