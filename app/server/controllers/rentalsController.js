import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// I always use createPool as it creates a pool of connections and closes them when not in use and also provides good performance.
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT,
});
  
const getRentals = (req, res, next) => {
    pool.query('select * from listings', (error, results) => {
        if (error) return next(error);
        console.log('request successfully served');
        res.status(200).json(results);
    });
}

const createRental = (req, res, next) => {
    pool.query('insert into listings set ?', req.body, (error, _) => {
        if (error) return next(error); 
        console.log('rental successfully created for request:', req.body);
        res.status(201).json({message:"Rental successfully created"});
    });
}

export default {getRentals, createRental};