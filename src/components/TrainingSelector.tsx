interface Exercise {
  name: string;
}

type Training = {
  name: string;
  mainExercises: Exercise[];
  extraExercises: Exercise[];
};

type Props = {
  trainings: Training[];
  selected: string | null;
  onSelect: (name: string) => void;
  onDelete: (name: string) => void;
};

export function TrainingSelector({ trainings, selected, onSelect, onDelete }: Props) {

  return (
    <div className="mt-6 space-y-2">
      {trainings.map((training) => (
        <div key={training.name} className="flex items-center justify-between bg-gray-100 p-2 rounded-md w-full">
          <button
            onClick={() => onSelect(training.name)}
            className={`w-full p-3 rounded text-left text-[#000] 
            ${selected === training.name
              ? "bg-blue-500 text-white"
              : "bg-gray-100"
            }`}
          >
            {training.name}
          </button>
          <button onClick={() => onDelete(training.name)} className="ml-2 text-red-500">
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}
