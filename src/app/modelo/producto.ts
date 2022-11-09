
export interface Producto {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock:number;
  brand: string;
  category: string;
  thumbnail: string;
  images:string;
}

export interface ProductoPorId extends Producto{
id?: number;
}
