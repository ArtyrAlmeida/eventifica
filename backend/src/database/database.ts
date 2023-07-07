import path from 'path';
import { connect } from 'mongoose';

const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_NAME } = process.env;

const connectionUri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin`;
console.log(connectionUri);


const connectDb = async () => {
    connect(connectionUri)
        .then(() => console.log('Connected to db'))
        .catch((err) => console.error('Could not connect: ', err));;
};

export default connectDb;