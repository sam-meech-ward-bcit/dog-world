import { AddDogForm } from "./add-dog-form" //client component
async function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getBreeds() {
  await wait(7000)
  const results = await fetch("https://dog.ceo/api/breeds/list/all")
  const data = await results.json()
  return Object.keys(data.message)
}


export default async function AddDog() {

  const breeds = await getBreeds()
  console.log(breeds)



  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Add a New Dog</h1>
        <AddDogForm breeds={breeds} />
      </div>
    </main>
  );
}
