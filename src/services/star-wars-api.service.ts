import { Injectable } from '@angular/core';
import { IPerson } from 'src/models/iperson';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPlanet } from 'src/models/iplanet';
import { IStarship } from 'src/models/istarship';


@Injectable({
  providedIn: 'root'
})
export class StarWarsApiService {

  constructor(private http: HttpClient) { }

  //baseUrl = 'http://swapi.com/api';

  getPersonById(): Observable<IPerson>{
    //const url = `${this.baseUrl}/people/${id}`;
    
    return this.http.get<IPerson>('/assets/responses/person.json');
  }

  getPlanetById(): Observable<IPlanet>{
    //const url = `${this.baseUrl}/planets/${id}`;

    return this.http.get<IPlanet>('/assets/responses/planet.json');
  }

  getStarshipById(): Observable<IStarship>{
    //const url = `${this.baseUrl}/starships/${id}`;

    return this.http.get<IStarship>('/assets/responses/starship.json');
  }


}
