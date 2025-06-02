import { useParams } from "react-router-dom";

function Exercise() {
  const { id } = useParams();
  
  return ( 
    <div className="p-4">
      <h1 className="text-2x1 font-bold mb-4">Detalhes do Exercício</h1>
      <p>ID: {id}</p>
    </div>
  );
}

export default Exercise;
