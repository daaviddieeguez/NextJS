import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: String }>;
};

export const generateMetadata = async ({ params } : Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${id}`);
        }, 100);
    });

    return {
        title: `Producto ${title}`
    };
};

export default async function ProductList(
    {params}: Props
){
    const productId =  (await params).productId;

    return <h1>Producto  {productId}</h1>
}