export interface createProduct {
  productName: string;
  productType: string;
  productDesctiption: string;
  status: string;
}

export interface createProductResponse {
  id: number;
  productName: string;
  productType: string;
  productDesctiption: string;
  status: string;
  createdDate: string;
  updatedDate: string;
}
