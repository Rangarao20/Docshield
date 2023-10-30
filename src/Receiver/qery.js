const getissue_det = 'SELECT * FROM details';
const getapproved_det = 'SELECT * FROM details WHERE status = 2';

module.exports = {
    getissue_det,
    getapproved_det
}