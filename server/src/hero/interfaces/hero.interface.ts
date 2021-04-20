import { Observable } from 'rxjs';

export interface Hero {
  id: number;
  name: string;
}

export interface HeroById {
  id: number;
}

export interface IHeroService {
  findOne(data: HeroById): Observable<Hero>;
  findMany(upstream: Observable<HeroById>): Observable<Hero>;
}
