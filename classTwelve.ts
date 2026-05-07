type Product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string
}

type ProductSummary = Pick<Product,'id' | 'name' | 'price'>

type ProductWithOutStock = Omit<Product, 'stock' |'color'>
type ProductWithColor = Required<Product>
const product1 : ProductWithColor = {
    id: 22,
    stock: 222,
    name:'product',
    price: '32',
    color: 'red'
}

type OptionalProduct = Partial<Product>
