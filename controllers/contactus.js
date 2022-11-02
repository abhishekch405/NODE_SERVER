const path = require('path');
exports.getcontactus = (req, res, next) => {
    console.log("In contactuspage!");
    res.sendFile(path.join(__dirname, '../', 'views', 'contactus.html'))
}
exports.postcontactus = (req, res, next) => {
    console.log("In contactuspage post request!");
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'views', 'success.html'))
}