import React, { useState } from 'react';
import CreateProposalForm from './CreateProposalForm'; // Adjust the import path if necessary

const ProposalEntryTrigger = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick} class="myButton">Create New Proposal</button>
      {showForm && <CreateProposalForm onClose={handleCloseForm} />}
    </div>
  );
};

export default ProposalEntryTrigger;