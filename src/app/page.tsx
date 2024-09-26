import Image from "next/image";
import AddDog from "./add-dog";
import { Suspense } from "react";
import AddDogSkeleton from "./add-dog-server";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Welcome to DoggyWorld</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/images/happy-dog.jpg"
              alt="Happy dog"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Discover Dog Breeds</h2>
              <p className="text-gray-600">Explore a wide variety of dog breeds and learn about their characteristics.</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src="/images/dog-care.jpg"
              alt="Dog care"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Dog Care Tips</h2>
              <p className="text-gray-600">Get expert advice on how to take care of your furry friend.</p>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                View Tips
              </button>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<AddDogSkeleton />}>
        <AddDog />
      </Suspense>
    </main>
  );
}
