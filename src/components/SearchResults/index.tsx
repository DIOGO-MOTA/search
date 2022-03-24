import { ProductItem } from "../ProductItem";

interface SerchResultsProps {
  results: Array<{
    id: string;
    descrição: string;
    lista_principal: string;
  }>
}


export function SerchResults({ results }: SerchResultsProps) {
  return (
    <div>
      {results.map(product => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
}