import mysql from 'mysql2/promise';


export default async function createConnectionBD() {
    try{

        const connect = await mysql.createConnection({
            host: 'localhost',
            user: 'anderson',
            database: 'couriersRegistry',
            password: '150588'
        });

        return connect;

    }
    catch(error){
        console.error(error.message);
    }
}

