import path from 'path';
import { Sequelize } from 'sequelize-typescript';

const db = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_NAME as string,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    host: process.env.DB_HOST as string,
    models: [path.join(__dirname, '../models')],

});

const connectDb = async () => {
    await db.sync();
    db.authenticate()
        .then(() => console.log('Database ssuccessfully connected'))
        .catch(error => console.log('Could not connect to database: ', error)
        );
};

export default connectDb;