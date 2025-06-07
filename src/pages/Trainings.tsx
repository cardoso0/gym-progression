import { useState } from "react";
import { CreateTrainingForm } from "../components/CreateTrainingForm";
import { TrainingSelector } from "../components/TrainingSelector";
import { TrainingEditor } from "../components/TrainingEditor";
import { BtnSettings, ModalSettings } from "../components/ModalSettings";

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
  const [isSettingsOpen, setSettingsOpen] = useState<boolean>(false);

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

  const handleDeleteTraining = (name: string) => {
    setTrainings(prev => prev.filter(t => t.name !== name));
    if (selected === name) {
      setSelected(null);
    }
  };

  const selectedTraining = trainings.find((t) => t.name === selected);

  return (
    <div className="max-w-md mx-auto p-4">
      {/* <ModalSettings /> */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Meus Treinos</h1>
        <BtnSettings setValue={setSettingsOpen}/>
        <ModalSettings
          isOpen={isSettingsOpen}
          onClose={() => setSettingsOpen(false)}
        />
      </div>


      {!selected ? (
        <>
          <CreateTrainingForm onCreate={handleCreateTraining} />
          <TrainingSelector
            trainings={trainings}
            selected={selected}
            onSelect={(name) => setSelected(name)}
            onDelete={handleDeleteTraining}
          />
        </>
      ) : (
        <div className="mt-4">
          <button
            className="text-sm text-blue-600 mb-2"
            onClick={() => setSelected(null)}
          > ← </button>

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
