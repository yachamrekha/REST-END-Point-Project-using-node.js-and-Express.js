const express = require('express')
const app = express()

const questions = [
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python1, pip,query"
    },
    {
        question:"how to install Java",
        slug:"how-to-install-java",
        votes:4,
        views:100,
        tags:"java"

    },
    {
        question:"how to install MongoDB ",
        slug:"how-to-install-MongoDB ",
        votes:3,
        views:50,
        tags:"MongoDB"

    },{
        question:"how to install Node.js",
        slug:"how-to-install-Node.js",
        votes:5,
        views:40,
        tags:"Node.js"

    }
]

const users = [
    {
        name:"Rekha",
        followers:100,
        location:"Bangalore"

    },
    {
        name:"Reetu",
        followers:200,
        location:"Hyderabad"

    },
    {
        name:"Renu",
        followers:100,
        location:"Chennai"

    },
    {
        name:"Reena",
        followers:500,
        location:"vizag"

    }
    
]

const tags = [
    {
        tag:"Python",
        Description:"Python is used for server-side web development, software development, mathematics, and system scripting, and is popular for Rapid Application Development and as a scripting or glue language to tie existing components because of its high-level, built-in data structures, dynamic typing, and dynamic binding."
    },
    {
        tag:"Java",
        Description:"Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages."
    },
    {
        tag:"MongoDB",
        Description:"MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data, and it provides full indexing support, and replication with rich and intuitive APIs."
    },
    {
        tag:"Node.js",
        Description:"Node.js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language."
    }


]

app.get('/',(req,res)=>{
    res.send("Home")

})

app.get('/questions',(req,res)=>{
    res.send(questions)

})

app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj=>{
        if(obj.slug === slug){
            res.send(obj)
        }
    })
    res.send("Question not found")
 

})
app.get('/users',(req,res)=>{
    res.send(users)

})
app.get('/tags',(req,res)=>{
    res.send(tags)

})
app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")

})



app.listen(3000,()=>{
    console.log("Listening...")
 
})