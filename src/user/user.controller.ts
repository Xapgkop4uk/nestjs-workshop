import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from '../entities/user';
import { UserService } from './user.service';

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
