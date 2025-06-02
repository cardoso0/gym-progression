import { exercises } from "../data/exercises";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2x1 font-bold mb-4">Exercícios</h1>
      <ul className="space-y-2">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="bg-gray-100 p-3 rounded shadow-sm">
            <Link to={`/exercise/${exercise.id}`} className="text-blue-600 hover:underline">
              {exercise.name} 
              <span className="text-sm text-gray-500">({exercise.group})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
