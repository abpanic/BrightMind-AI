import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "bright-mind-ai@bright-mind.in", 
      from: "bright-mind-ai@bright-mind.in",
      subject: `${req.body.subject}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Phone:</strong> ${req.body.phone}</p>
          <p><strong>Career Path:</strong> ${req.body.careerPath}</p>
          <p><strong>Work Experience:</strong> ${req.body.workExperience}</p>
          <p><strong>Message:</strong> ${req.body.message}</p>
        </div>
      `,
    });

    return res.status(200).json({ error: "" });
  } catch (error) {
    console.error("SendGrid Error", error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
