import type { Training } from "../data/trainings";
import { mockTrainings } from "../data/trainings";
import { useState } from "react";

function Trainings() {
  const [trainings, setTrainings] = useState<Training[]>(mockTrainings);
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);

  // UI de quando nenhum treino está selecionado
  if (!selectedTraining) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Meus Treinos</h1>

        <ul className="space-y-2">
          {trainings.map((training) => (
            <li
              key={training.id}
              onClick={() => setSelectedTraining(training)}
              className="bg-gray-100 rounded p-4 shadow hover:bg-gray-200 cursor-pointer text-[#000]"
            >
              <span className="font-semibold">{training.name}</span> – {training.group}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // UI de treino selecionado
  return (
    <div className="p-4">
      <button
        onClick={() => setSelectedTraining(null)}
        className="mb-4 text-sm text-blue-600 hover:underline"
      >
        ← Voltar
      </button>

      <h2 className="text-xl font-bold mb-2">
        {selectedTraining.name} – {selectedTraining.group}
      </h2>

      <div className="mb-4">
        <h3 className="font-semibold">Exercícios principais</h3>
        <ul className="list-disc list-inside">
          {selectedTraining.mainExercises.map((ex) => (
            <li key={ex.id}>{ex.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold">Exercícios extras</h3>
        <ul className="list-disc list-inside">
          {selectedTraining.extraExercises.map((ex) => (
            <li key={ex.id}>{ex.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trainings;