
import { useState, useEffect } from "react";

const useLocalStorage = () => {
  const [saveJobs, updateSaveJobs] = useState(() => {
    try {
      const savedJobs = localStorage.getItem("savedJobs");
      return savedJobs ? JSON.parse(savedJobs) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(saveJobs));
  }, [saveJobs]);

  return [saveJobs, updateSaveJobs];
};

export default useLocalStorage;
