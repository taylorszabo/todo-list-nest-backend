import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [TodosService, PrismaService],
})
export class TodosModule {}
