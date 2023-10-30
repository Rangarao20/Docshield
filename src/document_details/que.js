const getdoc_details = 'SELECT * FROM details where status = 1';
const getsigned_details = 'SELECT * FROM details where status = 2 or status = 3';
const approve = 'UPDATE details SET status = $2 where document_id = $1';
const savedoc = 'INSERT INTO details (issuer,signer,status,receiver_id,receiver_mail_id,document_title,doc_det,doc_file) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
module.exports = {
   getdoc_details,
   approve,
   getsigned_details,
   savedoc
}