import Mailjet from 'node-mailjet';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, careerPath, message, workExperience } = req.body;

    try {
      const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: 'abhilash.panicker111@gmail.com', // Your verified sender email
                Name: 'ABHILASH PANICKER',
              },
              To: [
                {
                  Email: 'abhilash.panicker@outlook.com', // Your email where you want to receive the form data
                  Name: 'Bright Mind AI Counsellor',
                },
              ],
              Subject: `New Contact Us Submission from ${name}`,
              TextPart: `
                New contact form submission:
                - Name: ${name}
                - Email: ${email}
                - Phone: ${phone}
                - Career Path: ${careerPath}
                - Work Experience: ${workExperience}
                - Message: ${message}
              `,
              HTMLPart: `
                <h3>New Contact Form Submission</h3>
                <ul>
                  <li><strong>Name:</strong> ${name}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Phone:</strong> ${phone}</li>
                  <li><strong>Career Path:</strong> ${careerPath}</li>
                  <li><strong>Work Experience:</strong> ${workExperience}</li>
                  <li><strong>Message:</strong> ${message}</li>
                </ul>
              `,
            },
          ],
        });

        const result = await request;
        res.status(200).json({ success: true, result: result.body });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
