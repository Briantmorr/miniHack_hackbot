const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3089;
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {res.status(200).send('Hello Matt'); });
app.listen(port, ()=> {
    console.log('Listening on port ' + port);
});
<<<<<<< HEAD
app.post('/hello', (req, res, next)=> {
    var userName = req.body.user_name;
    var botPayload = {
        text: 'Hello' + username + ', Bark Bark Bark'
    };
    if (userName != 'slackbot'){
        return res.status(200).json(botPayload);
    } else {
        return res.status(200).end();
    }
});



app.get('/slack', (req, res) => {
    
    
    res.status(200).send('try again'); });
=======
app.post('/', (req, res)=> {
    res.status(200).send('hello');
    // var userName = req.body.user_name;
    // var botPayload = {
    //     text: 'Hello' + username + ', Bark Bark Bark'
    // };
    // if (userName != 'slackbot'){
    //     return res.status(200).json(botPayload);
    // } else {
    //     return res.status(200).end();
    // }
});


// {
//     "ok": true,
//     "channel": "C9YPC1LMB",
//     "ts": "1522383631.000070",
//     "message": {
//         "type": "message",
//         "user": "U9YCMQNS0",
//         "text": "Bark",
//         "bot_id": "B9XV6AUC8",
//         "ts": "1522383631.000070"
//     }
// }
>>>>>>> f3f8ddf06bf109716b8a0ae932bf6013bfce25c4
