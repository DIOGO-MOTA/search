interface ProductItemProps {
  product: {
    id: string;
    descrição: string;
    lista_principal: string;
  }
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      <strong>{product.id} </strong>
      {product.descrição} - <strong>
        {product.lista_principal} </strong>
    </div>
  )
}