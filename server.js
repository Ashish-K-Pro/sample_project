const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const PORT = 3000;
// we are not talking to any db but just saving it internally..
const tasks = []

app.get('/',(req,res)=>{

    res.render("index")
})

app.get('/tasks',(req,res)=>{
res.render('tasks',{tasks:tasks})

})


app.post('/task',(req,res)=>{

const newTask = req.body.task;
tasks.push(newTask)

res.redirect('/')
}
)

module.exports = app.listen(PORT,()=>{
console.log(`server is running at port: ${PORT}`)

})