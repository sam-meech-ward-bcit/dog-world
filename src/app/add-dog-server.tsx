import React from 'react';

export default function AddDogSkeleton() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          <div className="animate-pulse bg-gray-300 h-10 w-3/4 mx-auto rounded"></div>
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="animate-pulse bg-gray-300 h-6 w-1/4 rounded"></div>
            </label>
            <div className="animate-pulse bg-gray-300 h-10 w-full rounded"></div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="animate-pulse bg-gray-300 h-6 w-1/4 rounded"></div>
            </label>
            <div className="animate-pulse bg-gray-300 h-10 w-full rounded"></div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <div className="animate-pulse bg-gray-300 h-6 w-1/4 rounded"></div>
            </label>
            <div className="animate-pulse bg-gray-300 h-10 w-full rounded"></div>
          </div>
          <div className="animate-pulse bg-gray-300 h-10 w-1/4 rounded"></div>
        </div>
      </div>
    </main>
  );
}