export interface IProduct{
    id: number;
    name: string;
    price: number;
    image: string;
    inStock: boolean;
    brand: string;
}


export interface ICart{
    cart: IProduct[]
}
