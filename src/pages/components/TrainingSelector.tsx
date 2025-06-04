interface Props {
  trainings: string[];
  selected: string | null;
  onSelect: (name: string) => void;
}

export function TrainingSelector({ trainings, selected, onSelect }: Props) {
  return (
    <div className="mt-6 space-y-2">
      {trainings.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`w-full p-3 rounded text-left ${
            selected === name ? "bg-blue-500 text-white" : "bg-gray-100"
          }`}
        >
          Treino {name}
        </button>
      ))}
    </div>
  );
}
