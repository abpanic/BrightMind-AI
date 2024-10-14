import Mailjet from 'node-mailjet';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, careerPath, message, couponCode, workExperience } = req.body;

    let emailSuccess = false;
    let supabaseSuccess = false;

    try {
      // Send Email via Mailjet
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
                - Coupon Code: ${couponCode}
                - Message: ${message}
              `,
              HTMLPart: `
                <h3>New Contact Form Submission</h3>
                <ul>
                  <li><strong>Name:</strong> ${name}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Phone:</strong> ${phone}</li>
                  <li><strong>Career Path:</strong> ${careerPath}</li>
                  <li><strong>Coupon Code:</strong> ${couponCode}</li>
                  <li><strong>Work Experience:</strong> ${workExperience}</li>
                  <li><strong>Message:</strong> ${message}</li>
                </ul>
              `,
            },
          ],
        });

      await request;
      emailSuccess = true;
    } catch (error) {
      console.error('Failed to send email: ', error);
    }

    try {
      // Write contact form data to Supabase
      const { data, error } = await supabase
        .from('contact_forms')
        .insert([{ 
          name, 
          email, 
          phone, 
          career_path: careerPath, 
          couponCode, 
          message, 
          work_experience: workExperience 
        }]);

      if (error) {
        throw new Error('Error saving data to Supabase: ' + error.message);
      }
      supabaseSuccess = true;
    } catch (error) {
      console.error('Failed to save to Supabase: ', error);
    }

    // Return success status for both email and supabase actions
    res.status(200).json({ emailSuccess, supabaseSuccess });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
