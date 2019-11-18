import { IStarship } from './istarship';
import { IPerson } from './iperson';
import { IPlanet } from './iplanet';

export interface IViewModel { 

    person: IPerson;
    planet: IPlanet;
    starship: IStarship;

}