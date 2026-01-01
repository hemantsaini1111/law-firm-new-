# Backend API Setup for Contact Form with File Attachments

To enable file attachments in emails and WhatsApp messages, you need to set up a backend API endpoint.

## Required Backend Endpoint

Create a POST endpoint at `/api/send-email` that accepts FormData with the following fields:

- `to`: Recipient email (abalegal@outlook.com)
- `from`: Sender email
- `subject`: Email subject
- `body`: Email body text
- `attachment`: File attachment (PDF or Word document)

## Environment Variable

Set the `VITE_EMAIL_API_ENDPOINT` environment variable in your `.env` file:

```
VITE_EMAIL_API_ENDPOINT=https://your-backend-url.com/api/send-email
```

## Backend Implementation Example (Node.js/Express)

```javascript
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const FormData = require('form-data');

const upload = multer({ storage: multer.memoryStorage() });
const app = express();

app.post('/api/send-email', upload.single('attachment'), async (req, res) => {
  try {
    const { to, from, subject, body } = req.body;
    const attachment = req.file;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'outlook',
      auth: {
        user: 'your-email@outlook.com',
        pass: 'your-password'
      }
    });

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: body,
      attachments: attachment ? [{
        filename: attachment.originalname,
        content: attachment.buffer
      }] : []
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});
```

## Alternative: Using EmailJS

You can also use EmailJS service for sending emails with attachments from the frontend:

1. Sign up at https://www.emailjs.com/
2. Create an email service template
3. Install EmailJS: `npm install @emailjs/browser`
4. Update the `sendEmailWithAttachment` function to use EmailJS

## WhatsApp File Attachments

Note: WhatsApp Web API doesn't support sending files directly via URL. For WhatsApp:

1. **Option 1**: Upload file to cloud storage (e.g., AWS S3, Google Cloud Storage) and share the link
2. **Option 2**: Use WhatsApp Business API (requires Meta Business verification)
3. **Option 3**: Instruct users to manually attach files in WhatsApp (current implementation)





