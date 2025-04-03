const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs'); // Import ExcelJS for Excel generation

const app = express();
app.use(bodyParser.json());

// Utility function to generate a PDF
const generatePDF = (formData, res) => {
  const doc = new PDFDocument();

  // Set headers for the response
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

  // Finalize the PDF and send it as a response
  doc.end();
  doc.pipe(res);
};

// Utility function to generate an Excel file
const generateExcel = async (formData, res) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Project Details');

  // Add headers
  worksheet.addRow(['Field', 'Value']);
  worksheet.addRow(['Project Name', formData.projectName]);
  worksheet.addRow(['Description', formData.description]);
  worksheet.addRow(['Funding Goal', formData.fundingGoal]);

  // Add funding milestones
  worksheet.addRow([]);
  worksheet.addRow(['Funding Milestones']);
  formData.fundingMilestones.forEach((milestone, index) => {
    worksheet.addRow([`${index + 1}`, milestone]);
  });

  // Add release milestones
  worksheet.addRow([]);
  worksheet.addRow(['Release Milestones']);
  formData.releaseMilestones.forEach((milestone, index) => {
    worksheet.addRow([`${index + 1}`, milestone]);
  });

  // Add project members
  worksheet.addRow([]);
  worksheet.addRow(['Project Members']);
  formData.projectMembers.forEach((member, index) => {
    worksheet.addRow([`${index + 1}`, member]);
  });

  // Set headers for the response
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="project.xlsx"');

  // Write the Excel file to the response
  await workbook.xlsx.write(res);
  res.end();
};

// Route to handle PDF download
app.post('/api/download/pdf', (req, res) => {
  const { formData } = req.body;

  // Validate formData
  if (!formData) {
    return res.status(400).json({ error: 'Invalid request: formData is required.' });
  }

  // Generate and send the PDF
  generatePDF(formData, res);
});

// Route to handle Excel download
app.post('/api/download/excel', async (req, res) => {
  const { formData } = req.body;

  // Validate formData
  if (!formData) {
    return res.status(400).json({ error: 'Invalid request: formData is required.' });
  }

  // Generate and send the Excel file
  await generateExcel(formData, res);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));