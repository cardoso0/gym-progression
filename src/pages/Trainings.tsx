import { trainings } from "../data/trainings";

function Trainings() {
  return (
    <div className="p-4">
      <h1 className="text-2x1 font-bold mb-4">Meus Treinos</h1>
      <div className="grid gap-4">
        {trainings.map((training) => (
          <div key={training.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">
              {training.name} - {training.group}
            </h2>

            <div>
              <h3 className="text-lg font-medium">Exercícios Principais</h3>
              <ul>
                {training.mainExercises.map((exercises) => (
                  <li key={exercises.id}>{exercises.name}</li>
                ))}
              </ul>

              {training.extraExercises.length > 0 && (
                <>
                  <h3 className="text-lg font-medium">Exercícios Extras</h3>
                  <ul className="list-disc list-inside text-gray-500">
                    {training.extraExercises.map((exercises) => (
                      <li key={exercises.id}>{exercises.name}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trainings;