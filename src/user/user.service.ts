import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from '../entities/user';

@Injectable()
export class UserService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) repo) {
    super(repo)
  }
}
