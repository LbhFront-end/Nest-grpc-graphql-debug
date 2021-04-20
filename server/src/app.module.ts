import { Module } from '@nestjs/common';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [HeroModule],
  providers: [],
})
export class AppModule {}
