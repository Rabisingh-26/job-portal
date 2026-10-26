import React from 'react'


const SaveButton = ({ jobId, savedJobIds = [], setSavedJobIds }) => {
  const isSaved = savedJobIds.includes(Number(jobId));

  const handleSave = () => {
    if (!setSavedJobIds) {
      console.error('setSavedJobIds prop is missing from SaveButton');
      return;
    }

    setSavedJobIds((previousIds) => {
      const normalizedIds = previousIds.map(Number);

      if (normalizedIds.includes(Number(jobId))) {
        return normalizedIds.filter((id) => id !== Number(jobId));
      }

      return [...normalizedIds, Number(jobId)];
    });
  };

  return (
    <button className="save-link" onClick={handleSave}>
      {isSaved ? 'SAVED' : 'SAVE JOB'}
    </button>
  );
};

export default SaveButton;
