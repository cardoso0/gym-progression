import { useState } from "react";

interface Props {
  onCreate: (name: string) => void;
}

export function CreateTrainingForm({ onCreate }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCreate(name.trim());
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do treino (ex: A)"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Criar
      </button>
    </form>
  );
}
