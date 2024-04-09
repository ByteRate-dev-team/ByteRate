html_page_dir = '/mnt/c/Personals/ByteRate/html_pages/'
css_page_dir = '/mnt/c/Personals/ByteRate/css_styles/'
js_page_dir = '/mnt/c/Personals/ByteRate/Javascript/'
const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

// Send homepage html file upon entering website
app.get('/', (req, res) => {
    res.sendFile(html_page_dir + 'welcome_page.html')
})

// send css file for homepage style 
app.get('/welcome_page.css', (req, res) => {
    res.sendFile(css_page_dir + 'welcome_page.css')
}) 

// send javascript file for homepage style 
app.get('/welcome_page.js', (req, res) => {
    res.sendFile(js_page_dir + 'welcome_page.js')
}) 


// send review from browser to server when submitted
app.post('/add_rest', (req, res) => {
    console.log("RECIEVED A NEW REVIEW")
    const review_data = req.body
    console.log(JSON.stringify(review_data))
})

// send html file for review page upon request
app.get('/review_page', (req, res) => {
    res.sendFile(html_page_dir + 'review_page.html')
})

// send javascript file for review page upon request 
app.get('/review_page.js', (req, res) => {
    res.sendFile(js_page_dir + 'review_page.js')
})

// listen for requests on port #3000
app.listen(port, () => {
    console.log('ByteRate listening on port ' + port)
})
