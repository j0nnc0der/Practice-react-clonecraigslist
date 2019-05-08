const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js')

// create the expres app
const app = express()
    // create middleware to handle the serving of the app
app.use('/', serveStatic(path.join(__dirname, '/public')))
app.get('/api/categories', function(req, rest) {
    res.json(categoriesData)
})
app.get('*', function(req, rest) {
        res.sendFile(__dirname + '/public/index.html')
    })
    // any route we put in, it sends to public folder and then html.
    // anythin that dont match the root directory send it to the home page.
    // this activats react router to control the rouutes and components

// create default port to serve the app
const port = process.env.PORT || 5000
app.listen(port)
console.log('server started on port' + port)

// const express = require('express')
// const serveStatic = require('serve-static')
// const path = require('path')
// // create the express app
// const app = express()
// // create middleware to handle the serving the app
// app.use("/", serveStatic ( path.join (__dirname, '/public')))
// // serve index by default
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/public/index.html')
// })
// // Create default port to serve the app on
// const port = process.env.PORT || 5000
// app.listen(port)
// // Log to feedback that this is actually running
// console.log('Server started on port ' + port)



// yarn add axios
// https://www.npmjs.com/package/axios