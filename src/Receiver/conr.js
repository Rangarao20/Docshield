const pool = require("../..//db");
const qery = require("./qery");

const getissue_det = (req, res) => {
    const name = req.params.name;
    pool.query(qery.getissue_det,(error, results) => {
      if (error) throw error;
      // res.status(200).json(results.rows);
      return res.send(results.rows);
    });
  };

  const getapproved_det = (req, res) => {
    pool.query(qery.getapproved_det, (error, results) => {
      if (error) throw error;
      // res.status(200).json(results.rows);
      return res.send(results.rows);
    });
  };

  module.exports = {
    getissue_det,
    getapproved_det
  }