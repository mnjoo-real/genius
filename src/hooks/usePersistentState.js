import { useEffect, useState } from 'react';
import { loadData, saveData } from '../services/storageService.js';

// Custom hook so UI can swap storageService with a real API later.
export default function usePersistentState(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const stored = loadData();
    if (stored !== null && stored !== undefined) {
      setValue(stored);
    }
  }, []);

  const persist = (nextValue) => {
    setValue(nextValue);
    saveData(nextValue);
  };

  return [value, persist];
}
