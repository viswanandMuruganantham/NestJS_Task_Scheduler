import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  // Runs every minute
  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    this.logger.log('🚀 Executing scheduled task every minute');
  }

  // Runs every 10 seconds
  @Interval(10000)
  handleInterval() {
    this.logger.log('🔁 Executing task every 10 seconds');
  }

  // Runs once after 5 seconds
  @Timeout(5000)
  handleTimeout() {
    this.logger.log('⏳ Executing one-time task after 5 seconds');
  }

  // Manual task trigger
  executeManualTask() {
    this.logger.log('📢 Manual task execution triggered!');
    return { message: 'Task executed successfully!' };
  }
}
