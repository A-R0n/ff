require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const path = require('path');
const app = express();
const {SERVER_PORT} = process.env;
const port = SERVER_PORT | 3002;
app.use(json());
app.use(cors());


app.use(express.static(`${__dirname}/../build/`));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
	console.log(`Nothin can stop me im All the wayyyy upppp: ${port}`);
});
