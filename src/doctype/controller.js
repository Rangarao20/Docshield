const { json } = require("express");
const pool = require("../..//db");
const queries = require("./queries");

const getdoctype = (req, res) => {
  pool.query(queries.getdoctype, (error, results) => {
    if (error) throw error;
    // res.status(200).json(results.rows);
    return res.send(results.rows);
  });
};

// const getdoctype = (req, res) => {
//     pool.query(queries.getdoctype, (error, results) => {
//         if (error) {
//             throw error;
//         }

//         // Assuming the data in results.rows is a valid JSON string
//         try {
//             const parsedData = results.rows.map(row => JSON.parse(row.jsonColumn));
//             return res.send(parsedData);
//         } catch (e) {
//             console.error('Error parsing JSON:', e);
//             return res.status(500).send('Internal Server Error');
//         }
//     });
// };
const addCertificate = (req, res) => {
  try {
    const { jsonb_data, certificate_name, status } = req.body;
    console.log(jsonb_data, certificate_name, status);
    pool.query(
      queries.addCertificate,
      [jsonb_data, certificate_name, status],
      (error, results) => {
        if (error) throw error;
        res
          .status(201)
          .send(JSON.stringify("Certificate Template Stored Successfuly"));
      }
    );
  } catch (error) {
    res.status(500), send(JSON.stringify("Template Creation Unsuccessfull"));
  }
};

module.exports = {
  getdoctype,
  addCertificate,
};
