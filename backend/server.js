require('dotenv').config()
const express =  require('express')
const massive = require('massive')
const {getAllProducts, getProduct} = require('./controllers/productController')
const {getCart, getOrders} = require('./controllers/orderController')
const {getUsers} = require('./controllers/userController')
const {CONNECTION_STRING, SERVER_PORT, NODE_ENV} = process.env

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

// Products
app.get('/api/products', getAllProducts)
app.get('/api/products/:id', getProduct)
app.get('/api/cart', getCart)
app.get('/api/orders', getOrders)
app.get('/api/users', getUsers)

// User
// app.post('/api/users', addUser)


massive ({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false},
})
.then((dbInstance) => {
  app.set('db', dbInstance)
  console.log('Database connection establish successfully');

app.listen(SERVER_PORT, console.log(`Server running in ${NODE_ENV} port ${SERVER_PORT}`))

})

