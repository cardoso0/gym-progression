export type Exercise = {
  id: string;
  name: string;
};

export type Training = {
  id: string;
  name: string;
  group: string;
  mainExercises: Exercise[];
  extraExercises: Exercise[];
};

export const mockTrainings: Training[] = [
  {
    id: "a",
    name: "Treino A",
    group: "Peito",
    mainExercises: [
      { id: "1", name: "Supino Reto" },
      { id: "2", name: "Supino Inclinado" },
    ],
    extraExercises: [{ id: "3", name: "Crucifixo" }],
  },
  {
    id: "b",
    name: "Treino B",
    group: "Costas",
    mainExercises: [{ id: "4", name: "Puxada Frente" }],
    extraExercises: [{ id: "5", name: "Remada Curvada" }],
  },
];
