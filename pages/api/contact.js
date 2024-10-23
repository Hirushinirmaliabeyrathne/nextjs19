import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    // Input validation
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = { email, name, message };

    let client;
    const connectionString =
      'mongodb://abeyrathnenirmali:m5agfIRLwuvcFS3j@<hostname>/Nextjs-course19?ssl=true&replicaSet=atlas-mv8whz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

    try {
      // Connect to MongoDB
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      // Insert the message into the 'messages' collection
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    // Return success response
    res.status(201).json({ message: 'Successfully stored message!', newMessage });
  }
}

export default handler;
