import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, phone, message } = req.body;

    console.log('Received contact request:', { name, phone, message });

    // Check if SMTP credentials are provided
    const hasCredentials = process.env.SMTP_USER && process.env.SMTP_PASS;

    if (!hasCredentials) {
      console.warn('SMTP credentials missing. Email not sent, but request logged.');
      return res.json({ 
        success: true, 
        message: 'Solicitud recibida (Modo Demo: Configura SMTP para recibir correos reales).' 
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"HAVE ALL Web" <${process.env.SMTP_USER}>`,
        to: 'verify@haveall.live',
        subject: `Nueva Solicitud Urgente de ${name}`,
        text: `
          Nombre: ${name}
          Teléfono: ${phone}
          Mensaje: ${message}
        `,
        html: `
          <h3>Nueva Solicitud Urgente</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: '¡Gracias! Tu solicitud ha sido enviada con éxito.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
