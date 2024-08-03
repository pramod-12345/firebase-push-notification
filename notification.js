const admin = require('firebase-admin');

const sendNotification = async (req, res) => {
    const { title, body, token } = req.body;

    if (!title || !body || !token) {
        return res.status(400).send({ error: 'title, body, and token are required' });
    }

    const message = {
        notification: {
            title,
            body,
        },
        token, // Replace with the target device's token
    };

    try {
        const response = await admin.messaging().send(message);
        console.log('Notification sent successfully:', response);
        res.json({ success: true, response });
    } catch (error) {
        console.error('Error sending notification:', error);
        res.status(500).json({ error: 'Notification failed', details: error.message });
    }
};

module.exports = { sendNotification };
