"use client";
import { useState } from "react";
import { createDog } from "./create-dog-action"; // server actions can be imported into client components
import { twMerge } from 'tailwind-merge'

import { type User} from "./database"

export function AddDogForm({ breeds }: { breeds: string[] }) {

  const [name, setName] = useState("")
  const [breed, setBreed] = useState(breeds[Math.floor(Math.random() * breeds.length)])
  const [age, setAge] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    console.log({ name, breed, age })

    // http request
    // nextjs magic
    // TODO: handle errors
    const result = await createDog({ name, breed, age })
    console.log(result)
    setIsLoading(false)

    if (result.success) {
      setName("")
      setBreed(breeds[Math.floor(Math.random() * breeds.length)])
      setAge("")
      alert("👍")
      return;
    }

    alert(result.error)
  }

  return (
    <form
      className="bg-white shadow-md rounded-lg p-6"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          name="dog-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="breed"
        >
          Breed
        </label>
        <select
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          name="dog-breed"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="age"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          name="dog-age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={twMerge("bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline", isLoading ? "opacity-50 cursor-not-allowed" : "")}
      >
        {isLoading ? "Add Dog..." : "Add Dog"}
      </button>
    </form>
  );
}
