const { MongoClient } = require('mongodb');

async function maindata() {
    const connectionString = "mongodb+srv://user:mati2008@clusterjava.dnds0q7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJava";
    const databaseName = 'lesson';
    const questionId = '65e9940625e1ec7972980df2';

    const client = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db(databaseName);
        const collection = database.collection('questions');

        const query = { _id: questionId };
        const question = await collection.findOne(query);

        if (question) {
            console.log('Answer for question 1:', question.correct_answer);
        } else {
            console.log('Question not found');
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

maindata().catch(console.error);



maindata()