export const getInteraction = async (): Promise<{ [key: string]: string }> => {
    const res = await fetch('/drug_combo.json');
    if (!res.ok) throw new Error("Failed to load interaction data");
  
    const nestedData = await res.json();
    const flatMap: { [key: string]: string } = {};
  
    for (const drugA in nestedData) {
      for (const drugB in nestedData[drugA]) {
        const key = [drugA.toLowerCase(), drugB.toLowerCase()].sort().join("+");
        flatMap[key] = nestedData[drugA][drugB];
      }
    }
  
    return flatMap;
  };
  