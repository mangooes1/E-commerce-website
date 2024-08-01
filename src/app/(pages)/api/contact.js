import FormData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: 'api', key: API_KEY });

  const messageData = {
    from: 'Contact Form <contact@mg.adityasumna990.com>',
    to: 'adityasuman990@gmail.com',
    subject: 'New Contact Form!',
    text: `Hello,

    You have a new form entry from: ${name} (${email}).

    ${message}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
    res.status(200).json({ submitted: true });
  } catch (err) {
    console.error('Error sending email', err);
    res.status(500).json({ error: 'Error sending email' });
  }
}
