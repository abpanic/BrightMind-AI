import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      await mailjetClient
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: 'abhilash.panicker111@gmail.com', // Your verified sender email
                Name: 'Manmohan Singh',
              },
              To: [
                {
                  Email: email,
                  Name: 'Recipient Name',
                },
              ],
              Subject: subject,
              TextPart: message,
            },
          ],
        });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
