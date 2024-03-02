import React, { useState } from 'react';

const CreateProposalForm = () => {
  const [proposal, setProposal] = useState({
    topic: '',
    coordinates: { lat: '', lng: '' },
    marker: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'lat' || name === 'lng') {
      setProposal(prevState => ({
        ...prevState,
        coordinates: {
          ...prevState.coordinates,
          [name]: value
        }
      }));
    } else {
      setProposal(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposal Created:', proposal);
    // Here, you would typically send the proposal to your backend or state management store
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Topic:</label>
        <input
          type="text"
          name="topic"
          value={proposal.topic}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Type:</label>
        <select name="type" value={proposal.type} onChange={handleChange}>
          <option value="">Select a type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
          <option value="type3">Type 3</option>
        </select>
      </div>
      <button type="submit">Create Proposal</button>
    </form>
  );
};

export default CreateProposalForm;
