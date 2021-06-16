import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.model';

const listTodos = [
  {
    id: 1,
    name: 'bbbb',
  },
  {
    id: 2,
    name: 'aaaa',
  },
];
@Resolver(() => Todo)
export class TodoResolver {
  @Query(() => [Todo])
  getTodos(): Todo[] {
    return listTodos;
  }

  @Query(() => Todo)
  getTodoById(@Args('id') id: number): Todo {
    return listTodos.find((todo) => todo.id === id);
  }

  @Mutation(() => Todo)
  createTodo(@Args('id') id: number, @Args('name') name: string): Todo {
    const data = { id, name };
    listTodos.push(data);
    return data;
  }
  @Query(() => Todo)
  throwError() {
    throw new Error('Error');
  }
}
