import { ApiProperty } from '@nestjs/swagger';
import { PaginationQuery } from '../../../modules/common/pagination.dto';

export class ProductsListQuery extends PaginationQuery {}

export class GetProductsbyId {
  @ApiProperty({ required: true })
  id: number;
}

export class createProduct {
  @ApiProperty({ required: true })
  productName: string;

  @ApiProperty({ required: true })
  productType: string;

  @ApiProperty({ required: true })
  productDesctiption: string;

  @ApiProperty({ required: true })
  status: string;
}
