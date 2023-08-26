import React from "react";

const Hero = () => {
  return (
    <main className="flex min-h-screen flex-col items-center bg-amber-200 justify-between p-24">
      <div className="grid gap-3">
        <h1 className="self-center text-5xl font-bold">
          Chat with your flightmates in real time!
        </h1>
        <p className="self-center text-xl font-semibold">
          Please enter your flight no.:
        </p>
        <htmlForm>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div> */}
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-amber-300 rounded-lg bg-amber-50 focus:ring-amber-500 focus:border-amber-500 focus:outline-none focus:ring-0 ring-offset-amber-500 dark:ring-offset-amber-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="i.e.: FR5342"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-800 focus:ring-2 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </htmlForm>
      </div>
    </main>
  );
};

export default Hero;
