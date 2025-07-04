"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import { getInteraction } from './components/getInteractions';
import Head from 'next/head';
import Popup from './components/disclaimer';


const aliasMap: { [key: string]: string } = {
  "Weed": "Cannabis",
  "Pot": "Cannabis",
  "Marijuana": "Cannabis",
  "Cigarettes": "Nicotine",
  "Tylenol": "Acetaminophen",
  "Advil": "Ibuprofen",
  "Valium": "Diazepam",
  "Molly": "MDMA",
  "Ecstacy": "MDMA",
  "Acid": "LSD",
  "Shrooms": "Mushrooms",
  "Percocet": "Oxycodone",
  "Methamphetamine": "Amphetamines",
  "Lean": "Opioids",
  "Adderall" : "Amphetamines",
  "Hydrocodone": "Opioids",
  "Oxycodone": "Opioids",
  "Vicodin": "Opioids",
  "Codeine": "Opioids",
  "Heroin": "Opioids",
  "Fentanyl": "Opioids",
  "Tramadol": "Tramadol"
};
const drugOptions = [
  "LSD", "Mushrooms", "DMT", "Mescaline", "DOx", "NBOMes", "2C-x", "2C-T-x", "5-MeO-xXT", "Cannabis",
  "Ketamine", "MXE", "DXM", "Nitrous", "Amphetamines", "MDMA", "Cocaine", "Caffeine", "Alcohol",
  "GHB/GBL", "Opioids", "Tramadol", "Benzodiazepine", "MAOIs", "SSRIs",
     "Zoloft", "Xanax", "Tylenol", "Ibuprofen", "Benadryl", "Melatonin", "Oxycodone", "Valium", "Lexapro"
];

const extendedDrugOptions = [...drugOptions, ...Object.keys(aliasMap)];

export default function Home() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [drugInput, setDrugInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [drugList, setDrugList] = useState<string[]>([]);
  const [interactionMessage, setInteractionMessage] = useState<string | null>(null);
  const [interactionMap, setInteractionMap] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    getInteraction().then(setInteractionMap).catch(console.error);
  }, []);
  

  // Filter drug suggestions based on user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setDrugInput(input);

    // Show suggestions if input is not empty
    if (input) {
      const filteredSuggestions = extendedDrugOptions.filter(
        (drug) =>
          drug.toLowerCase().startsWith(input.toLowerCase()) &&
          !drugList.includes(aliasMap[drug.toLowerCase()] || drug )
      );
      
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
 
  // Add selected drug to the list
  const addDrug = (drug: string) => {
    const normalized = aliasMap[drug] || drug;
  
    if (!drugList.includes(normalized)) {
      setDrugList([...drugList, normalized]);
      setDrugInput('');
      setSuggestions([]);
      
    }
  };
  
  
  

  // Handle when a suggestion is clicked
  const handleSuggestionClick = (drug: string) => {
    addDrug(drug);  
  };

  // Handle key press for 'Enter' to add the drug
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && drugInput.trim() !== '' && suggestions.includes(drugInput.trim())) {
      addDrug(drugInput.trim());
    } else if (e.key === 'Enter' && suggestions.length > 0) {
      addDrug(suggestions[0]);
    }
    
  };
  
  
  // Handle clear button for all added drugs
  const handleClear = () => {
    setDrugList([]);
    setInteractionMessage(null); // Clear the interaction message
  };

  // 
  const checkInteractions = () => {
    if (drugList.length < 2) {
      setInteractionMessage("Please add at least two drugs to check interactions.");
      return;
    }
  
    const normalizedList = drugList.map(d => aliasMap[d] || d); // normalize before comparing
    const interactionsFound: string[] = [];
  
    for (let i = 0; i < normalizedList.length; i++) {
      for (let j = i + 1; j < normalizedList.length; j++) {
        const drugA = normalizedList[i].toLowerCase();
        const drugB = normalizedList[j].toLowerCase();
        const key = [drugA, drugB].sort().join("+");
  
        if (interactionMap[key]) {
          interactionsFound.push(`${drugList[i]} + ${drugList[j]}: ${interactionMap[key]}`);
        }
      }
    }
  
    if (interactionsFound.length > 0) {
      setInteractionMessage(interactionsFound.join("\n"));
    } else {
      setInteractionMessage("No known interactions found. Please consult a professional.");
    }
  
    setDrugList([]);
  };
  
  

  // Function to remove a specific drug from the list
  const removeDrug = (drug: string) => {
    setDrugList(drugList.filter((d) => d !== drug));
  };

  return (
    <>

    <Head>
      <title>SafeSubstance | Drug Mix Checker</title>
      <meta name="description" content="Check drug interactions easily. Learn about the risks of mixing LSD, Xanax, Cannabis, MDMA, and more." />

      <link rel="canonical" href="https://safesubstance.org" />
    </Head>
      
     <div className="w-full min-h-screen bg-zinc-900 bg-[radial-gradient(ellipse_at_75%_80%,_rgba(255,255,255,0.015)_0%,_transparent_100%)]">

        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex flex-col items-center text-center p-20 space-y-10" style={{ minHeight: '500px' }}>
          <div className="text-5xl font-bold text-white ">
          
            <p className="text-5xl font-bold text-white">Understand the <span className='animate-pulse text-red-100'>Risks</span> of</p>
            <p className="text-5xl font-bold text-white mt-3">Mixing Drugs</p>
          </div>
              <div>
          
          {showPopup && (
            <Popup message="Hello from TS!" onClose={() => setShowPopup(false)} />
          )}
        </div>

          {/* Buttons Placeholder */}
          <div className="mt-4 flex gap-4 h-12 transition-all duration-300 ease-in-out">
            {drugList.length > 0 ? (
              <>
                <button
                  onClick={checkInteractions}
                  className="text-sm md:text-base bg-zinc-800/30 backdrop-blur-md hover:bg-blue-500 text-white font-bold rounded-md py-1 px-5 border-1 border-zinc-600 transition-all duration-300 ease-in-out"
                >
                  Check Interactions
                </button>
                <button
                  onClick={handleClear}
                  className="text-sm md:text-base bg-zinc-800/30 backdrop-blur-md hover:bg-blue-500 text-white font-bold rounded-md py-1 px-4 border-1 border-zinc-600 transition-all duration-300 ease-in-out"
                >
                  Clear All
                </button>
              </>
            ) : (
              <div className="h-full"></div>
            )}
          </div>

          {/* Input Fields */}
          <div className="w-full max-w-xs md:max-w-md text-lg">
            <input
              type="text"
              placeholder="Search Drugs"
              value={drugInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="w-full p-4 rounded-t-md bg-zinc-800/30 backdrop-blur-md border border-zinc-600 text-white"
            />
            <div className="relative w-full max-w-md mx-auto">

            <div
              className={`bg-zinc-800/100 backdrop-blur-md border border-zinc-200 rounded-b-md w-full absolute z-10 overflow-y-auto text-left transition-all duration-300 ease-in-out transform origin-top ${
                suggestions.length > 0 ? 'opacity-100 scale-y-100 max-h-52' : 'opacity-0 scale-y-0 max-h-0'
              }`}
            >
              {suggestions.map((drug, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(drug)}
                  className="p-3 text-white hover:bg-zinc-600 cursor-pointer text-lg border-b border-zinc-600"
                >
                  {drug}
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Interaction Message */}
          {interactionMessage && (
            <div
            className={`-mt-5 bg-zinc-800 text-white p-4 rounded-md w-full max-w-xs md:max-w-md text-left text-sm md:text-xl space-y-2 border border-zinc-600 transform transition-all duration-300 hover:scale-101 ${
              suggestions.length > 0 ? 'mt-52' : '-mt-2'
            }`}
            
            >
              {interactionMessage.split('\n').map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
          )}

          {/* Drug List */}
          <div className="-mt-5 flex flex-wrap gap-2 justify-center">
            {drugList.map((drug, index) => (
              <div
                key={index}
                className="flex items-center bg-zinc-800/30 backdrop-blur-md text-white py-2 px-6 rounded-md shadow-md border border-zinc-600 min-w-20 transform transition-all duration-300 hover:scale-101 text-lg"
              >
                <span className="mr-5">{drug}</span>
                <button
                  onClick={() => removeDrug(drug)}
                  className="-mr-3 cursor-pointer"
                >
                  <Image src="/delete.svg" alt="Delete" width={10} height={8}/>
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
