import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('hello')
  hello() {
    return this.userService.getUser('1234');
  }
}
