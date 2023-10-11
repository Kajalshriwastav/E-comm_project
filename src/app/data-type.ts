export interface SignUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string,
    password:string,

}

export interface product{
    // productId: any;
    filter(arg0: (item: product) => string | null): unknown;
    name:string,
    price:number,
    category:string;
    image:string,
    description:string,
    color:string,
    id:number,
    quantity:undefined | number;
    productId:undefined | number;
}

export interface cart{
    name:string,
    price:number,
    category:string;
    image:string,
    description:string,
    color:string,
    id:number | undefined;
    quantity:undefined | number;
    userId:number;
    productId:number;
}

export interface priceSummary{
    price:number;
    tax:number;
    delivery:number;
    discount:number;
    total:number;

}

export interface order{
    address:string,
    contact:string,
    email:string,
    totalPrice:number,
    userId:number,
    id:number|undefined
}