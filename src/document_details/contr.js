const pool = require("../..//db");
const que = require("./que");

const getdoc_details = (req, res) => {
  pool.query(que.getdoc_details, (error, results) => {
    if (error) throw error;
    // res.status(200).json(results.rows);
    return res.send(results.rows);
  });
};

const approve = (req, res) => 
{
  const id1 = req.body.id;
  const status = req.body.status;
  console.log(id1);
  var update = 0;
  if(status === 'approve')
  {
     update = 2;
  }
  else if (status === 'reject')
  {
     update = 3;
  }
  console.log(update);
  pool.query(que.approve, [id1,update], (error, results) => {
    if (error) throw error;
    res.status(200).send(JSON.stringify("updated Successfully"));
  });
};

const getsigned_details = (req, res) => {
  pool.query(que.getsigned_details, (error, results) => {
    if (error) throw error;
    // res.status(200).json(results.rows);
    return res.send(results.rows);
  });
};

const savedoc = (req, res) => {
  // console.log(req.body);
  const { Issuer, Signer, Status, receiver_id, receiver_mail_id, name, jsonb , file} = req.body;
  const incorrectJsonString = jsonb;
  try {
    // Step 1: Remove the extra curly braces
    const trimmedJsonString = incorrectJsonString.replace(/^\{(.+)\}$/, "$1");
    // Step 2: Unescape the double quotes
    const correctedJsonString = trimmedJsonString.replace(/\\"/g, '"');
    // Parse the corrected JSON string into a JavaScript object
    const correctedJsonObject = JSON.parse(correctedJsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  pool.query(
    que.savedoc,
    [Issuer, Signer, Status, receiver_id, receiver_mail_id, name, jsonb, file],
    (error, results) => {
      if (error) throw error;
      res.status(201).send(JSON.stringify("Data Submitted Successfully"));
    }
  );
};

module.exports = {
  getdoc_details,
  approve,
  getsigned_details,
  savedoc,
};
