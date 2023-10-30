const pool = require("../..//db");
const queris = require('./queris');
const getuserdetails = (req,res) => {
    pool.query(queris.getuserdetails, (error,results) => {
        if (error) throw error;
        // res.status(200).json(results.rows);
        return res.send(results.rows);
    });
};

const getusername = (req,res)=> {
    const username = req.params.username;
    pool.query(queris.getusername, [username],(error, results) =>
    {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
}

const checkusers = (req,res) => {
    const a = req.body.username;
    pool.query(queris.checkusr,[a], (error,results) => {
        if(error) throw error;
        if(results.rows.length)
        {
            res.send("success");
        }
    })
}

module.exports = {
    getuserdetails,
    getusername,
}