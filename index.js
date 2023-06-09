const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json())


const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com"
    },
    {
        id: 4,
        name: "Samantha Lee",
        email: "samantha.lee@example.com"
    },
    {
        id: 5,
        name: "Tom Wilson",
        email: "tom.wilson@example.com"
    }
]



app.get('/users', (req,res) => {
    res.send(users)
})



app.post('/users',(req,res) => {
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.get('/', (req, res) => {
    res.send('User Management Server is running')
})







app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`);
})
