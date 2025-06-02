import { useParams } from "react-router-dom";
import { exercises } from "../data/exercises";

function Exercise() {
  const { id } = useParams();
  const exercise = exercises.find((exercise) => exercise.id === id);

  if (!exercise) {
    return <div className="p-4">Exercício não encontrado.</div>;
  }

  return ( 
    <div className="p-4">
      <h1 className="text-2x1 font-bold mb-4">{exercise.name}</h1>
      <p className="text-gray-600 mb-2">Grupo: {exercise.group}</p>
      <p>Depois iremos exibir registros de evolução...</p>
    </div>
  );
}

export default Exercise;
