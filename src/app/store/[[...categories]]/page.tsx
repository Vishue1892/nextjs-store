import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";


interface  CategoryProps {
    params:{
        categories: string[],
        searchParams?: string
    }
}
export default async function Category(props:CategoryProps){
const products = await getProducts()
const collections= await getCollections()
console.log(collections)
    const {categories}=props.params;
    //throw new Error('Error: Boom!')
    return(
        <ProductsWrapper products={products}/>
    )
}