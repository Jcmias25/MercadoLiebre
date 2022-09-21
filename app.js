const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname,'public')));

app.listen(process.env.PORT || 2000, () => {

    console.log('Servidor corriendo en el puerto 2000');
    
})

app.get('/', (req,res) => {

    res.sendFile(path.resolve(__dirname, 'src/views/home.html'))
    
});


app.get('/register', (req,res) => {

    res.sendFile(path.resolve(__dirname, 'src/views/register.html'))
    
});

app.get('/login', (req,res) => {

    res.sendFile(path.resolve(__dirname, 'src/views/login.html'))
    
});

app.post('/login', (req,res)=>{
    console.log(req.body);
    res.redirect('/');
});

app.post('/register', (req,res)=>{ 
    res.redirect('/');
});


