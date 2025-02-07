import { defineQuery } from "next-sanity";


export const allproducts = defineQuery(`
    
    *[_type == "products"]{
    _id,
    name,
    description,
    price,
    discountpercentage,
    pricewithoutdiscount,
    rating,
    ratingcount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    }`)

    
export const fourPro = defineQuery(`
    
    *[_type == "products"][0..3]{
    _id,
    name,
    description,
    price,
    discountpercentage,
    pricewithoutdiscount,
    rating,
    ratingcount,
    tags,
    sizes,
    "imageUrl": image.asset->url
    }`)