const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://aryanofficialcse:buyitnow1234@buyitnow.bt9vdwq.mongodb.net/portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Handle form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({
        name,
        email,
        message,
    });

    newContact.save((err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while saving the contact.');
        } else {
            console.log('Contact saved successfully!');
            res.status(200).send('Contact saved successfully!');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
