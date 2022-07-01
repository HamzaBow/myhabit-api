import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HabitGroupModule } from './habit-group/habit-group.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, HabitGroupModule, PrismaModule, AuthModule],
})
export class AppModule {}
