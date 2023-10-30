const getdoctype = 'SELECT * FROM certificate_template';
const addCertificate = 'INSERT INTO certificate_template (jsonb_data, certificate_name, status) VALUES ($1, $2, $3)';
module.exports = { 
getdoctype, 
addCertificate
}
