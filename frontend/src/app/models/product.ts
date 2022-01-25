export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type?: string;
  quantityInStock?: number;
}

export interface ProductParams {
  orderBy: string;
  pageSize: number;
  pageNumber: number;
  searchTerm?: string;
  types?: string[];
  brands?: string[];
}
