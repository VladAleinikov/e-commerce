export interface IBillboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}

export interface IProduct {
  id: string;
  category: ICategory;
  name: string;
  price: string;
  isFeatured: boolean;
  size: ISize;
  color: IColor;
  images: IImage[];
}

export interface IImage {
  id: string;
  url: string;
}

export interface ISize {
  id: string;
  name: string;
  value: string;
}

export interface IColor {
  id: string;
  name: string;
  value: string;
}
