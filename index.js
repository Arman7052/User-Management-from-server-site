const express = require('express');
const app = express();
const port = process.env.PORT || 5000;






app.get('/users', (req,res) => {
    res.send(users)
})




app.get('/', (req, res) => {
    res.send('User Management Server is running')
})







app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`);
})
