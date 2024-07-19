// /backend/controllers/dataController.js
const path = require('path');
const fs = require('fs');

const getData = (req, res) => {
    const dataPath = path.join(__dirname, '../data/extracted_data.json');

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
            return;
        }
        //send the response
        res.json(JSON.parse(data));
    });
};




module.exports = {
    getData,
};
