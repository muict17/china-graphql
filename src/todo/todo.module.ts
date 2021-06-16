import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resover';

@Module({
  providers: [TodoResolver],
})
export class TodoModule {}
