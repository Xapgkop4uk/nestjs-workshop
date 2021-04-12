import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ name: 'is_enterprise' })
  isEnterprise: boolean;

  @ApiProperty()
  @OneToMany(() => User, (user) => user.company)
  users: User[];
}
