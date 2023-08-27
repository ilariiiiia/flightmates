"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form () {
    const [flightNo, setFlightNo] = useState<string>("");
    const router = useRouter();
    function handleSubmit(e: any) {
        e.preventDefault();
        router.push(`/chat/${flightNo}`);
    }
    return <>
    <form onSubmit={e => handleSubmit(e)}>
        <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
            Search
        </label>
        <div className="relative">
            <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-amber-300 rounded-lg bg-amber-50 focus:ring-amber-500 focus:border-amber-500 focus:outline-none focus:ring-0 ring-offset-amber-500 dark:ring-offset-amber-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="i.e.: FR5342"
                required
                value={flightNo}
                onChange={(e) => setFlightNo(e.target.value)}
            />
            <button
                type="submit"
                className="text-amber-200 absolute right-2.5 bottom-2.5 bg-primary hover:bg-amber-800 focus:ring-2 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Search
            </button>
        </div>
    </form>
    </>
}