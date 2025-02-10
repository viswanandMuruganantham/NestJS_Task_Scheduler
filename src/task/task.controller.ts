import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('run-now')
  runTaskNow() {
    return this.taskService.executeManualTask();
  }
}
