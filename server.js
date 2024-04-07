html_page_dir = '/mnt/c/Personals/ByteRate/html_pages/'
css_page_dir = '/mnt/c/Personals/ByteRate/css_styles/'
js_page_dir = '/mnt/c/Personals/ByteRate/Javascript/'
const express = require('express')
const app = express()
const port = 3004

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
})

app.listen(port, () => {
    console.log('ByteRate listening on port ' + port)
})
