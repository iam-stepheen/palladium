import { ApiProperty } from '@nestjs/swagger';

class PaginationMeta {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  itemCount: number;

  @ApiProperty()
  itemsPerPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  currentPage: number;
}

export class Pagination {
  @ApiProperty()
  meta: PaginationMeta;
}

export class PaginationQuery {
  @ApiProperty({ required: false, default: 1 })
  page: number;

  @ApiProperty({ required: false, default: 100 })
  limit: number;
}
