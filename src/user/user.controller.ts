import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { User } from '../entities/user';
import { UserService } from './user.service';


@ApiTags('User')
@Crud({
  model: {
    type: User
  },
  query: {
    join: {
      company: {}
    }
  }
})
@Controller('user')
export class UserController {
  constructor(public service: UserService) {}
}
