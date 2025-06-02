export interface Exercise {
  id: string;
  name: string;
  group: string;
}

export const exercises: Exercise[] = [
  { id: '1', name: 'Supino Reto', group: 'Peito' },
  { id: '2', name: 'Agachamento Livre', group: 'Pernas' },
  { id: '3', name: 'Remada Curvada', group: 'Costas' },
];