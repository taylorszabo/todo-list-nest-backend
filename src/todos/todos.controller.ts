import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Prisma } from '@prisma/client';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoListDto: Prisma.TodoListCreateInput) {
    return this.todosService.createTodoList(createTodoListDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAllTodoLists();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOneTodoList(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoListDto: Prisma.TodoListUpdateInput,
  ) {
    return this.todosService.updateTodoList(+id, updateTodoListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.deleteTodoList(+id);
  }
}
