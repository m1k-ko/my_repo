const exp=require('express');
const app=exp();
app.get("/",(req,res)=>{
    res.send("Hello Sir!"
    );
});
app.get("/about",(req,res)=>{
    res.send("This is about page");
});
app.get("/Learn",(req,res)=>{
    res.send(`
    <h1>This is Learning Page,Welcome! </h1>
    <p>A method is a function attached to an object.
         In JavaScript, methods are just mostly functions that you reference via object properties.
          Update: As of ES2015, if you use method syntax to create them,
           they're slightly more than that because they have access to super.

    </p>
    `)
})

app.get("/Home",(req,res)=>{
    res.send(
        `<h1>This is home page</h1>
        <p>This is a small paragraph,Thank you</p>
    `
    )
})
app.listen(3000,()=>
{console.log("Server is running at port :3000")});


