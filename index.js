const express = require('express')
const app = express()
const port = 4000

accountSid = 'AC941abec52e0309d478487a365caa3148';
authToken = '782b7d4d66130b00b75d61f26a9d8f94'
const client = require('twilio')(accountSid, authToken);

app.get('/', (req, res) => {
    sendTextMessage();
    res.send(`
<div style="text-align:center; padding-top:40px;">
<h1>Your message has been sent successfully!</h1>
<p>This is a Hello World app</p>
</div>`);
})
app.listen(port, () => {
    console.log(`app listening to port:${port}`)
})

function sendTextMessage() {
    client.messages.create({
        body: 'An order has just been submitted',
        to: '+34610874050',
        from: '+13614507253',
    }).then(message => console.log(message))
        // here you can implement your fallback code
        .catch(error => console.log(error))
}
