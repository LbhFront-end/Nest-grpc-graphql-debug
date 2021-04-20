import { Module } from '@nestjs/common';
import { HeroControll } from './hero.controller';

@Module({
  imports: [],
  controllers: [HeroControll],
})
export class HeroModule {}
