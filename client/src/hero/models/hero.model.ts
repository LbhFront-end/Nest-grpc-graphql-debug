
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class HeroModel {
    @Field(() => ID)
    id: string;

    @Field({ nullable: true })
    name: string;
}
