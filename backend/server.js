const express = require('express');
const cors = require('cors');
const mailjet = require('node-mailjet').apiConnect(
  '538e13fbfb551c395fd24ef4b2f5422b', // Replace with your Mailjet API key
  '2def79d8eae16dc4bdfcdee12bf5aad3' // Replace with your Mailjet API secret
);

const app = express();
const port = 5000; // You can choose any available port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies

app.post('/send-email', async (req, res) => {
    try {
      // Send email using Mailjet API
      const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: 'primrosevt@primrosevt.com',
                Name: 'Michael',
              },
              To: [
                {
                  Email: 'caitcashwell@gmail.com',
                  Name: 'Michael',
                },
              ],
              Subject: 'Greetings from Mailjet.',
              TextPart: 'My first Mailjet email',
              HTMLPart:
                "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
              CustomID: 'AppGettingStartedTest',
            },
          ],
        });
        const result = await request;
        console.log(result.body);
    
        // Send success response
        res.status(200).json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Email sending failed:', error);
        // Send error response
        res.status(500).json({ error: 'Email sending failed' });
      }
    });
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
