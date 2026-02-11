const express = require('express');
const router = express.Router();
const db = require('../config/db');
const nodemailer = require('nodemailer');

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'bulingatsschool@gmail.com',
    pass: process.env.EMAIL_PASS
  }
});

module.exports = (upload) => {
  // Submit application with file upload
  router.post('/', upload.single('resultSlip'), async (req, res) => {
    try {
      const { firstName, lastName, email, phone, parentPhone, program, level } = req.body;
      const resultSlipPath = req.file ? req.file.filename : null;

      console.log('Received data:', { firstName, lastName, email, phone, parentPhone, program, level });

      // Save to database - use exact column names
      const [result] = await db.query(
        `INSERT INTO applications 
        (first_name, last_name, email, phone, parent_phone, program, level, result_slip, status, created_at) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW())`,
        [firstName, lastName, email, phone, parentPhone || '', program, level, resultSlipPath]
      );

      console.log('Application saved with ID:', result.insertId);

      // Send email to admin
      const adminMailOptions = {
        from: 'Bulinga TSS <bulingatsschool@gmail.com>',
        to: 'iromain133@gmail.com',
        subject: 'New Application Received - Bulinga TSS',
        html: `
          <h2>New Application Received</h2>
          <p><strong>Applicant:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Parent Phone:</strong> ${parentPhone || 'Not provided'}</p>
          <p><strong>Program:</strong> ${program}</p>
          <p><strong>Level:</strong> ${level}</p>
          <p><strong>Application ID:</strong> ${result.insertId}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          ${resultSlipPath ? `<p><strong>Result Slip:</strong> <a href="http://localhost:5002/uploads/${resultSlipPath}">View Document</a></p>` : '<p><strong>Result Slip:</strong> Not uploaded</p>'}
          <br>
          <p>Login to admin panel to review this application.</p>
        `
      };

      // Send email to applicant
      const applicantMailOptions = {
        from: 'Bulinga TSS <bulingatsschool@gmail.com>',
        to: email,
        subject: 'Application Received - Bulinga TSS',
        html: `
          <h2>Thank you for your application!</h2>
          <p>Dear ${firstName} ${lastName},</p>
          <p>We have received your application for <strong>${program}</strong> at Bulinga Technical Secondary School.</p>
          <p><strong>Application Details:</strong></p>
          <ul>
            <li>Program: ${program}</li>
            <li>Level: ${level}</li>
            <li>Application ID: ${result.insertId}</li>
          </ul>
          <p>We will review your application and contact you soon with our decision.</p>
          <p>If you have any questions, please contact us at bulingatsschool@gmail.com or +250 784 969 910.</p>
          <br>
          <p>Best regards,<br>Bulinga TSS Admissions Team</p>
        `
      };

      // Send emails (don't fail if email fails)
      try {
        await transporter.sendMail(adminMailOptions);
        console.log('Admin email sent');
      } catch (emailErr) {
        console.error('Admin email failed:', emailErr);
      }

      try {
        await transporter.sendMail(applicantMailOptions);
        console.log('Applicant email sent');
      } catch (emailErr) {
        console.error('Applicant email failed:', emailErr);
      }

      res.json({ 
        success: true, 
        message: 'Application submitted successfully',
        applicationId: result.insertId
      });
    } catch (error) {
      console.error('Application error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Get all applications (for admin)
  router.get('/', async (req, res) => {
    try {
      const [applications] = await db.query(
        'SELECT * FROM applications ORDER BY created_at DESC'
      );
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Update application status
  router.put('/:id/status', async (req, res) => {
    try {
      const { status } = req.body;
      const { id } = req.params;

      await db.query(
        'UPDATE applications SET status = ? WHERE id = ?',
        [status, id]
      );

      // Get applicant email to send notification
      const [application] = await db.query(
        'SELECT email, first_name, last_name, program FROM applications WHERE id = ?',
        [id]
      );

      if (application.length > 0) {
        const app = application[0];
        const statusMailOptions = {
          from: 'Bulinga TSS <bulingatsschool@gmail.com>',
          to: app.email,
          subject: `Application ${status.charAt(0).toUpperCase() + status.slice(1)} - Bulinga TSS`,
          html: `
            <h2>Application Update</h2>
            <p>Dear ${app.first_name} ${app.last_name},</p>
            <p>Your application for <strong>${app.program}</strong> has been <strong>${status}</strong>.</p>
            <p>Please check your email for further instructions or contact us for more information.</p>
            <br>
            <p>Best regards,<br>Bulinga TSS Admissions Team</p>
          `
        };
        
        try {
          await transporter.sendMail(statusMailOptions);
        } catch (emailErr) {
          console.error('Status email failed:', emailErr);
        }
      }

      res.json({ success: true, message: 'Status updated' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};