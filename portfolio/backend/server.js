const express = require('express');
const fetch = require('node-fetch');
const DOMParser = require('dom-parser');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api', (req, res)=> {
    //const body = req.body;
    //const instaUrl = body.url;
    const instaUrl = "https://www.instagram.com/p/CSZeEhqpGthNu76kfXbZM9X03OJqFrAvnLIR3M0/?utm_medium=copy_link";
    let photoUrl = "";

    fetch(instaUrl).then((res) => {
        return res.text();
    }).then((html) => {
        // Parse PhotoUrl from instagram
        //console.log(html);
        //document.inputEncoding
        const domparser = new DOMParser();
        let doc = domparser.parseFromString(html);

        const links = doc.getElementsByTagName("img");
        console.log(links.length);
        links.forEach(elem => {
            console.log(elem.getAttribute("src"));
        })

    });

    res.json({username:'bryan'})
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})