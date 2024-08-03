const express = require('express');
const admin = require('firebase-admin');
const { sendNotification } = require('./notification');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert('./fir-demoweb-c77c4-firebase-adminsdk-jkybp-eadb9ccdd9.json'),
    databaseURL: 'https://your-firebase-database-url.firebaseio.com'
});

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to send notification to FMC
app.post('/notify', async (req, res) => {
    const { fmcUrl, message } = req.body;

    if (!fmcUrl || !message) {
        return res.status(400).send({ error: 'fmcUrl and message are required' });
    }

    try {
        const response = await axios.post(fmcUrl, { message });

        return res.status(response.status).send(response.data);
    } catch (error) {
        console.error('Error sending notification:', error);
        return res.status(500).send({ error: 'Failed to send notification' });
    }
});

// Endpoint to send notification using Firebase
app.post('/send-firebase-notification', sendNotification);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});