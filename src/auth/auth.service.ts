import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return 'User Signed Up';
  }

  signin() {
    return 'User Signed In';
  }

  resetpassword() {
    return 'User Password Reset';
  }
}
