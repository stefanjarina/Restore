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
  types: string[];
  brands: string[];
  searchTerm?: string;
}
