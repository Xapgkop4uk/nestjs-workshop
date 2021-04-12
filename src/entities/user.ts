import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ name:'company_id' })
  companyId: number

  @ManyToOne(() => Company, company => company.id)
  @JoinColumn({ name: 'company_id' })
  company: Company
}
