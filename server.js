const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const UserRouter = require('./Routes/UserRoutes')




//connect the server with the DB
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, err => err ? console.log(err) : console.log('DB is coonnected...'))

app.use(express.json())
app.use('/api/users', UserRouter)
const PORT = process.env.PORT || 7000;

app.listen(PORT, err = err ? console.log(err) : console.log(`Server is running on ${PORT}...`))