import { Args, Query, Resolver } from '@nestjs/graphql';
import { HeroService } from './hero.service';
import { HeroModel } from './models/hero.model';

@Resolver(of => HeroModel)
export class HeroResolver {
    constructor(private heroService: HeroService) { }

    @Query(returns => [HeroModel])
    async heros() {
        return await this.heroService.fetch();
    }

    @Query(returns => HeroModel)
    async hero(@Args('id') id: string) {
        return await this.heroService.fetchOne(id)
    }
}
