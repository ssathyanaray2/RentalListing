import pool from '../database/databaseConfig.js';
  
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