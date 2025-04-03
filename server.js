const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');

const app = express();
app.use(bodyParser.json());

app.post('/api/download/pdf', (req, res) => {
  const { formData } = req.body; // Extract form data from the request
  const doc = new PDFDocument();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="project.pdf"');

  // Add content to the PDF
  doc.text(`Project Name: ${formData.projectName}`);
  doc.text(`Description: ${formData.description}`);
  doc.text(`Funding Goal: ${formData.fundingGoal}`);
  doc.text('Funding Milestones:');
  formData.fundingMilestones.forEach((milestone, index) => {
    doc.text(`  ${index + 1}. ${milestone}`);
  });
  doc.text('Release Milestones:');
  formData.releaseMilestones.forEach((milestone, index) => {
    doc.text(`  ${index + 1}. ${milestone}`);
  });
  doc.text('Project Members:');
  formData.projectMembers.forEach((member, index) => {
    doc.text(`  ${index + 1}. ${member}`);
  });

  doc.end();
  doc.pipe(res);
});

app.listen(5000, () => console.log('Server running on port 5000'));