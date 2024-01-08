import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri = process.env.DB_URL;
const client = new MongoClient(uri);

const connect = client.connect();

const dbo = client.db('discord');

export function db_insert(collection, data) {
  connect.then(() => {
    dbo.collection(collection).insertOne(data, (err, res) => {
      if (err) throw err;
    });
  });
}
