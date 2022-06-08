import { Injectable } from '@nestjs/common';

@Injectable({})
export class UserService {
  getUser(userId) {
    return { userId };
  }
}
