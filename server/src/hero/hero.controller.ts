import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Hero, HeroById } from './interfaces/hero.interface';

@Controller()
export class HeroControll {
  private readonly items: Hero[] = [
    { id: 1, name: 'LaiBinHong' },
    { id: 2, name: 'WuMei' },
  ];

  @GrpcMethod('HeroService')
  findOne(data: HeroById): Hero {
    return this.items.find(({ id }) => id === data.id);
  }

  @GrpcStreamMethod('HeroService')
  findMany(data$: Observable<HeroById>): Observable<Hero> {
    const hero$ = new Subject<Hero>();

    const onNext = (heroById: HeroById) => {
      const item = this.items.find(({ id }) => id === heroById.id);
      hero$.next(item);
    };
    const onComplete = () => hero$.complete();
    data$.subscribe(onNext, null, onComplete);

    return hero$.asObservable();
  }
}
