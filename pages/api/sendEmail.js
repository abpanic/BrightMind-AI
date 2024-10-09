import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MJ_APIKEY_PUBLIC,
  apiSecret: process.env.MJ_APIKEY_PRIVATE,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: 'abhilash.panicker111@gmail.com', // Your verified sender email
                Name: 'Bright-Mind AI Counsellor',
              },
              To: [
                {
                  Email: email,
                  Name: 'Recipient Name',
                },
              ],
              Subject: subject,
              TextPart: message,
              HTMLPart: `<h3>${message}</h3>`, // Optionally send HTML
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
