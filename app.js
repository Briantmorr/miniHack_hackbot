const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3089;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, ()=> {
    console.log('Listening on port ' + port);
});

app.get('/', (req, res) => {res.status(200).send('Hello Matt'); });

app.post('/hello', (req, res, next)=> {
    var userName = req.body.user_name;
    var botPayload = {
        text: 'Hello' + userName + ', Bark Bark Bark'
    };
    if (userName != 'slackbot'){
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});



// app.get('/slack', (req, res) => {
    
    
//     res.status(200).send('try again'); });
// app.post('/', (req, res)=> {
//     res.status(200).send('hello');

// });
