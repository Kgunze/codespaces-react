import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function CreateProject() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    fundingGoal: '',
    fundingMilestones: [''],
    releaseMilestones: [''],
    projectMembers: [''],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedArray = [...prevData[field]];
      updatedArray[index] = value;
      return { ...prevData, [field]: updatedArray };
    });
  };

  const addArrayField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ''],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Created:', formData);
    alert('Project Created Successfully!');
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Create a New Project
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        onSubmit={handleSubmit}
      >
        {/* Project Details */}
        <TextField
          label="Project Name"
          name="projectName"
          type="text"
          variant="outlined"
          fullWidth
          required
          value={formData.projectName}
          onChange={handleInputChange}
        />
        <TextField
          label="Description"
          name="description"
          type="text"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          required
          value={formData.description}
          onChange={handleInputChange}
        />
        <TextField
          label="Funding Goal (USD)"
          name="fundingGoal"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={formData.fundingGoal}
          onChange={handleInputChange}
        />

        {/* Funding Milestones */}
        <Typography variant="h6">Funding Milestones</Typography>
        {formData.fundingMilestones.map((milestone, index) => (
          <TextField
            key={index}
            label={`Milestone ${index + 1}`}
            type="text"
            variant="outlined"
            fullWidth
            value={milestone}
            onChange={(e) => handleArrayChange(e, index, 'fundingMilestones')}
          />
        ))}
        <Button variant="outlined" onClick={() => addArrayField('fundingMilestones')}>
          Add Funding Milestone
        </Button>

        {/* Release Milestones */}
        <Typography variant="h6">Release Milestones</Typography>
        {formData.releaseMilestones.map((milestone, index) => (
          <TextField
            key={index}
            label={`Release Milestone ${index + 1}`}
            type="text"
            variant="outlined"
            fullWidth
            value={milestone}
            onChange={(e) => handleArrayChange(e, index, 'releaseMilestones')}
          />
        ))}
        <Button variant="outlined" onClick={() => addArrayField('releaseMilestones')}>
          Add Release Milestone
        </Button>

        {/* Project Members */}
        <Typography variant="h6">Project Members</Typography>
        {formData.projectMembers.map((member, index) => (
          <TextField
            key={index}
            label={`Member ${index + 1}`}
            type="text"
            variant="outlined"
            fullWidth
            value={member}
            onChange={(e) => handleArrayChange(e, index, 'projectMembers')}
          />
        ))}
        <Button variant="outlined" onClick={() => addArrayField('projectMembers')}>
          Add Project Member
        </Button>

        {/* Submit Button */}
        <Button variant="contained" color="primary" size="large" type="submit">
          Create Project
        </Button>
      </Box>
    </Container>
  );
}

