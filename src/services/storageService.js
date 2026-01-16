const STORAGE_KEY = 'genius-demo-data';

// This simulates a backend API + database using localStorage.
// Replace this module with fetch()/API calls later without changing UI code.
export function saveData(data, key = STORAGE_KEY) {
  localStorage.setItem(key, JSON.stringify(data));
}

// This simulates persistence for judging; data reloads across refreshes.
export function loadData(key = STORAGE_KEY) {
  const raw = localStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to parse stored data', error);
    return null;
  }
}

export function clearData(key = STORAGE_KEY) {
  localStorage.removeItem(key);
}
