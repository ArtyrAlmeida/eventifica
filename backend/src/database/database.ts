import path from 'path';
import { connect } from 'mongoose';

const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME } = process.env;

const connectionUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
console.log(connectionUri);


const connectDb = async () => {
    connect(connectionUri)
        .then(() => console.log('Connected to db'))
        .catch((err) => console.error('Could not connect: ', err));;
};

export default connectDb;