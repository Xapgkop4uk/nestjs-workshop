import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { Company } from '../entities/company';
import { CompanyService } from './company.service';

@ApiTags('Company')
@Crud({
  model: {
    type: Company,
  },
  query: {
    join: {
      users: {},
    },
  },
})
@Controller('company')
export class CompanyController {
  constructor(public service: CompanyService) {}
}
