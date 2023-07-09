import { connect } from 'mongoose';
import neo4j from 'neo4j-driver';

const driver = neo4j.driver('bolt://neo4j:7687', neo4j.auth.basic('neo4j', 'eventifica'));

const { MONGO_USER, MONGO_PASS, MONGO_HOST, MONGO_PORT, MONGO_NAME } = process.env;

const connectionUri = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_NAME}?authSource=admin`;
console.log(connectionUri);


const connectMongo = async () => {
    connect(connectionUri)
        .then(() => console.log('Connected to mongo'))
        .catch((err) => console.error('Could not connect: ', err));;
};

const getNeo4jSession = () => {
    return driver.session();
}

export { connectMongo, getNeo4jSession };