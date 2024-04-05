html_page_dir = '/mnt/c/Personals/ByteRate/html_pages/'
css_page_dir = '/mnt/c/Personals/ByteRate/css_styles/'
const express = require('express')
const app = express()
const port = 3002

// Send homepage html file upon entering website
app.get('/', (req, res) => {
    res.sendFile(html_page_dir + 'welcome_page.html')
})

// send css file for homepage style 
app.get('/welcome_style.css', (req, res) => {
    res.sendFile(css_page_dir + 'welcome_style.css')
}) 

app.listen(port, () => {
    console.log('ByteRate listening on port ' + port)
})
