import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HabitGroupModule } from './habit-group/habit-group.module';

@Module({
  imports: [UserModule, HabitGroupModule],
})
export class AppModule {}
