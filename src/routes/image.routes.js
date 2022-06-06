const { Router } = require('express'); 

const router = new Router();

const path = require('path');
const multer = require('multer');
const fs = require('fs');

// RENDER FORM UPLOAD
// router.get('/images/upload', (req, res) => {
//     res.render('index');
// });

router.post('/upload',(req, res)=>{
    res.send('uploaded')
})

router.get('/images', (req, res) => {});


module.exports = router;