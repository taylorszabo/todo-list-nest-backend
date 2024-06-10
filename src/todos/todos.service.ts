import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async createTodoList(data: Prisma.TodoListCreateInput) {
    return this.prisma.todoList.create({
      data,
    });
  }

  async findAllTodoLists() {
    return this.prisma.todoList.findMany({
      include: { todoListItems: true },
    });
  }

  async findOneTodoList(id: number) {
    return this.prisma.todoList.findUnique({
      where: { id },
      include: { todoListItems: true },
    });
  }

  async updateTodoList(id: number, data: Prisma.TodoListUpdateInput) {
    return this.prisma.todoList.update({
      where: { id },
      data,
    });
  }

  async deleteTodoList(id: number) {
    return this.prisma.todoList.delete({
      where: { id },
    });
  }
}
