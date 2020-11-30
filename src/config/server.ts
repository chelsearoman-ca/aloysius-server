import { Client } from 'ts-postgres';
import express from "express";
const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World 🤘🏽 🌎" });
});

app.get("/mushrooms", async (req, res)=> {

    const client = new Client({"host": "ec2-3-210-23-22.compute-1.amazonaws.com", "database": "d9m67v74a5u802", "user": "vymhwjkzrivzdi", "password": "xyz"});
    console.log('before connect')
    await client.connect();
    console.log('connected')
    try {
        // Querying the client returns a query result promise
        // which is also an asynchronous result iterator.
        const resultIterator = client.query(
            `SELECT '* ' || $1 || '!' AS message`,
            ['world']
        );
 
        for await (const row of resultIterator) {
            // 'Hello world!'
            console.log(row.get('message'));
        }
    } finally {
        await client.end();
    }

})

app.listen(PORT, () => console.log(`hosting @${PORT}`));

 

 
