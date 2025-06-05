import { useState } from "react";
import { CreateTrainingForm } from "../components/CreateTrainingForm";
import { TrainingSelector } from "../components/TrainingSelector";
import { TrainingEditor } from "../components/TrainingEditor";

interface Exercise {
  name: string;
}

interface Training {
  name: string;
  mainExercises: Exercise[];
  extraExercises: Exercise[];
}

export default function TrainingsPage() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const handleCreateTraining = (name: string) => {
    const alreadyExists = trainings.some((t) => t.name === name);
    if (!alreadyExists) {
      const newTraining: Training = {
        name,
        mainExercises: [],
        extraExercises: [],
      };
      setTrainings((prev) => [...prev, newTraining]);
    }
  };

  const selectedTraining = trainings.find((t) => t.name === selected);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meus Treinos</h1>

      {!selected && (<CreateTrainingForm onCreate={handleCreateTraining} /> )}

      {!selected ? (
        <TrainingSelector
          trainings={trainings}
          selected={selected}
          onSelect={(name) => setSelected(name)}
        />
      ) : (
        <div className="mt-4">
          <button
            className="text-sm text-blue-600 underline mb-2"
            onClick={() => setSelected(null)}
          >
            ← Voltar aos treinos
          </button>

          {selectedTraining && (
            <TrainingEditor
              trainingName={selectedTraining.name}
              mainExercises={selectedTraining.mainExercises}
              extraExercises={selectedTraining.extraExercises}
            />
          )}
        </div>
      )}
    </div>
  );
}
