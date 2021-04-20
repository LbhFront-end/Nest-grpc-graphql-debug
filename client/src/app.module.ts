import * as path from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      definitions: {
        path: path.join(process.cwd(), 'src/schema.gql'),
        outputAs: 'interface'
      }
    }),
    HeroModule
  ],
  providers: [],
})
export class AppModule { }
