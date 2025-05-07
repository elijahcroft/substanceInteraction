"use client"

import { useState } from 'react';
import Head from 'next/head';
import Navbar from './components/navbar';

// Predefined drug options
const drugOptions = [
  "Aspirin",
  "Ibuprofen",
  "Caffeine",
  "Paracetamol",
  "Codeine",
  "Weed", 
  "Tylenol",
  "Advil",
  "Naproxen",
  // Add more drugs to the list
];

export default function Home() {
  const [drugInput, setDrugInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [drugList, setDrugList] = useState<string[]>([]);
  const [interactionMessage, setInteractionMessage] = useState<string | null>(null);

  // Filter drug suggestions based on user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDrugInput(input);

    // Show suggestions if input is not empty
    if (input) {
      const filteredSuggestions = drugOptions.filter(
        (drug) =>
          drug.toLowerCase().startsWith(input.toLowerCase()) &&
          !drugList.includes(drug) // Exclude already added drugs
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Add selected drug to the list
  const addDrug = (drug: string) => {
    if (drug && !drugList.includes(drug)) {
      setDrugList([...drugList, drug]);
      setDrugInput('');
      setSuggestions([]); // Clear suggestions after selection
      setInteractionMessage(null); // Clear the interaction message
    }
  };

  // Handle when a suggestion is clicked
  const handleSuggestionClick = (drug: string) => {
    addDrug(drug);
  };

  // Handle key press for 'Enter' to add the drug
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && drugInput.trim() !== '' && drugList.includes(drugInput)) {
      addDrug(drugInput.trim());
    }else if(e.key === 'Enter'){
      addDrug(suggestions[0])
    }
  };

  // Handle clear button for all added drugs
  const handleClear = () => {
    setDrugList([]);
    setInteractionMessage(null); // Clear the interaction message
  };

  // Placeholder function to check interactions
  const checkInteractions = () => {
    if (drugList.length < 2) {
      setInteractionMessage("Please add at least two drugs to check interactions.");
      return;
    }

    // Placeholder logic for interactions
    const interactions = `Combining ${drugList.join(", ")} may have potential risks. Please consult a healthcare professional.`;
    setInteractionMessage(interactions);

    // Clear the drug list after displaying the message
    setDrugList([]);
  };

  // Function to remove a specific drug from the list
  const removeDrug = (drug: string) => {
    setDrugList(drugList.filter((d) => d !== drug));
  };

  return (
    <>
      <div className="w-full h-full bg-zinc-900">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <div className="flex flex-col items-center text-center p-20 space-y-10">
          <div>
            <p className="text-5xl font-bold text-white">Understand the Risks of</p>
            <p className="text-5xl font-bold text-white">Mixing Drugs</p>
          </div>

          {/* Input Fields */}
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search Drugs"
              value={drugInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="w-full p-4 rounded-t-md bg-zinc-800 border border-zinc-600 text-white"
            />
            {suggestions.length > 0 && (
              <div
                className="bg-zinc-800 border border-zinc-200 rounded-b-md w-full absolute z-10 overflow-y-auto"
                style={{ maxHeight: '150px' }}
              >
                {suggestions.map((drug, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(drug)}
                    className="p-3 text-white hover:bg-zinc-600 cursor-pointer"
                  >
                    {drug}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Interaction Message */}
          {interactionMessage && (
            <div className="mt-4 bg-zinc-800 text-white p-4 rounded-md w-96 text-center">
              {interactionMessage}
            </div>
          )}

          {/* Drug List */}
          <div className="-mt-5 flex flex-wrap gap-2 justify-center">
            {drugList.map((drug, index) => (
              <div
                key={index}
                className="flex items-center bg-zinc-800 text-white py-2 px-4 rounded-md shadow-md border border-lg"
              >
                <span className="mr-2">{drug}</span>
                <button
                  onClick={() => removeDrug(drug)}
                  className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Delete
                  <img src='/safe-sub/public/delete.png'></img>
                </button>
              </div>
            ))}
          </div>

          {/* Buttons */}
          {drugList.length > 0 && (
            <div className="mt-4 flex gap-4">
              <button
                onClick={checkInteractions}
                className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
              >
                Check Interactions
              </button>
              <button
                onClick={handleClear}
                className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
