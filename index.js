const express = require('express');
const admin = require('firebase-admin');
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

// Endpoint to generate a custom token
app.post('/generate-token', async (req, res) => {
    const { uid } = req.body;

    if (!uid) {
        return res.status(400).send({ error: 'uid is required' });
    }

    try {
        const customToken = await admin.auth().createCustomToken(uid);
        res.json({ token: customToken });
    } catch (error) {
        console.error('Error generating custom token:', error);
        res.status(500).json({ error: 'Failed to generate custom token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});