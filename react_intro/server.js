// import express from 'express';
// import path from 'path';


const express = require('express');
const path = require('path');

const app = express();

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening to port ${port}`));