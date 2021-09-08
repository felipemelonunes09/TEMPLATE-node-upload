const express = require('express')
const path = require('path')
const app = express();

// multer é um middleware
const multer = require('multer')

// Config
    //EJS
        app.set('view engine', 'ejs')
    //Multer
    const storage = multer.diskStorage({ 
        destination: function(req, file, cb){
            cb(null, 'uploads/')
        },
        filename: function(req, file, cb) {
            cb(null, `${file.originalname}-${Date.now()*Math.random()}${path.extname(file.originalname)}` )
        }
    })
    const upload = multer({ storage })


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Arquivo Recebido')
})

app.listen(8080, () => {
    console.log('Servidor on-line!')
})