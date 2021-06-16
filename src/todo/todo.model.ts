import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name: string;
}
