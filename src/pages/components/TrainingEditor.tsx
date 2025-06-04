interface Exercise {
  name: string;
}

interface Props {
  trainingName: string;
  mainExercises: Exercise[];
  extraExercises: Exercise[];
}

export function TrainingEditor({ trainingName, mainExercises, extraExercises }: Props) {
  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-bold">Treino {trainingName}</h2>

      <div>
        <h3 className="text-lg font-semibold">Principais</h3>
        <ul className="pl-4 list-disc">
          {mainExercises.map((ex, idx) => (
            <li key={idx}>{ex.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Extras</h3>
        <ul className="pl-4 list-disc text-gray-500">
          {extraExercises.map((ex, idx) => (
            <li key={idx}>{ex.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
