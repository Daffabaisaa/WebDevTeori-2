const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;

// Setup storage and file naming
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Use the cors middleware and allow requests from localhost:3000
app.use(cors({
    origin: 'http://localhost:3000'
}));

// File upload route
app.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).send('File uploaded successfully');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});