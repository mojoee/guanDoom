import React, { useState, useEffect } from 'react';

const CreateProposalForm = ({ onClose, markerCoordinates }) => {
  const [proposal, setProposal] = useState({
    topic: '',
    description: '',
    dateCreated: new Date().toISOString().substring(0, 10), // Format the current date as YYYY-MM-DD
    lat: '', // Initialize latitude
    lng: '', // Initialize longitude
  });

  // Update form state with marker coordinates when they change
  useEffect(() => {
    if (markerCoordinates) {
      setProposal(prevState => ({
        ...prevState,
        lat: markerCoordinates.lat,
        lng: markerCoordinates.lng,
      }));
    }
  }, [markerCoordinates]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProposal({ ...proposal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Proposal:', proposal);
    onClose(); // Close form upon submission
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        {/* Topic and Reason Fields */}
        <div>
          <label htmlFor="topic">Topic:</label>
          <input
            type="text"
            name="topic"
            id="topic"
            value={proposal.topic}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Topic description">Topic description:</label>
          <input
            type="text"
            name="description"
            id="description"
            value={proposal.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateCreated">Date Created:</label>
          <input
            type="date"
            name="dateCreated"
            id="dateCreated"
            value={proposal.dateCreated}
            disabled // This field is auto-set and not editable by the user
          />
        </div>
        <button type="submit">Submit Proposal</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateProposalForm;