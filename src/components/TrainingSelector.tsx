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
};

export function TrainingSelector({ trainings, selected, onSelect }: Props) {
  return (
    <div className="mt-6 space-y-2">
      {Object.keys(trainings).map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`w-full p-3 rounded text-left text-[#000] ${
            selected === name ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Treino {name}
        </button>
      ))}
    </div>
  );
}
