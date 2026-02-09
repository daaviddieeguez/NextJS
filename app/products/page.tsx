import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productos",
};

export default function Product() {
  return (
    <>
      <h1>Lista de productos</h1>
      <h2><Link href="/products/1">Producto 1</Link></h2>
      <h2><Link href="/products/2">Producto 2</Link></h2>
      <h2><Link href="/products/3" replace>Producto 3</Link></h2>
    </>
  );
}
