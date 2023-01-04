import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User as UserEntity } from '@prisma/client';
import { User } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  @Get('me')
  getMe(@User() user: UserEntity) {
    return user;
  }
}
