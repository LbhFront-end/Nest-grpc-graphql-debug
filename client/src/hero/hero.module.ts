import { HeroService } from './hero.service';
; import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';
import { HeroResolver } from './hero.resolver';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'HERO_PACKAGE',
                ...grpcClientOptions
            }
        ])
    ],
    controllers: [],
    providers: [HeroResolver, HeroService],
    exports: [HeroService]
})
export class HeroModule { }
