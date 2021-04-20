import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, ReplaySubject } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { Hero, HeroById, IHeroService } from './interfaces/hero.interface';

@Injectable()
export class HeroService implements OnModuleInit {
    private heroService: IHeroService;
    constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) { }

    onModuleInit() {
        this.heroService = this.client.getService<IHeroService>('HeroService');
    }

    fetch(): Observable<Hero[]> {
        const ids$ = new ReplaySubject<HeroById>();
        ids$.next({ id: 1 });
        ids$.next({ id: 2 });
        ids$.complete();

        const stream = this.heroService.findMany(ids$.asObservable());
        return stream.pipe(toArray());
    }

    fetchOne(id: string): Observable<Hero> {
        return this.heroService.findOne({ id: +id })
    }
}
