const express = require('express')
const app = express()
const cors = require('cors')
//const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(express.json())
app.use(cors())

// user: chatterjeerankini
// pass: QfdBuTJ5v59rRqY6


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-board-mongodb.c5qvdcb.mongodb.net/?retryWrites=true&w=majority`;
//&appName=job-board-mongodb`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create db
    const db = client.db("JobBoardServer");
    const jobsCollections = db.collection("demoJobs")

    // post a job
    app.post("/post-job", async(req, res) => {
        const body = req.body;
        body.createAt = new Date();
        // console.log(body)
        const result = await jobsCollections.insertOne(body);
        if(result.insertedId){
            return res.status(200).send(result);
        }else{
            return res.status(404).send({
              message:  "can not insert! try again later",
              status: false
            })
        }
    })

    // get all jobs
    app.get("/all-jobs", async(req, res) => {
        const jobs = await jobsCollections.find({}).toArray()
        res.send(jobs);
    })

    //get each job using id
    app.get("/all-jobs/:id",async(req,res)=>{
      const id = req.params.id;
      const job = await jobsCollections.findOne({
        _id: new ObjectId(id)
      })
      res.send(job)
    })
    //get jobs by email
    app.get("/myJobs/:email",async(req,res) => {
      //console.log(req.params.email);
      const jobs = await jobsCollections.find({postedBy : req.params.email}).toArray();
      res.send(jobs)
    })

    //delete job
    app.delete("/job/:id",async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await jobsCollections.deleteOne(filter);
      res.send(result)
    })

    //update a job
    app.patch("/update-job/:id",async(req,res)=>{
      const id = req.params.id;
      const jobData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const updateDoc = {
        $set: {
          ...jobData
        }
      }
      const result = await jobsCollections.updateOne(filter,updateDoc,options);
      res.send(result)
    })

    //apply job
    app.post('/apply', async (req, res) => {
      try {
        const { fullName, email } = req.body;
        const cvFile = req.files?.cv; // Access uploaded file

        res.status(200).json({ message: 'Application submitted successfully!' });
      } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    });

    //Creating Endpoint for registering the user
/*app.post('/signup',async(req,res)=>{
  let check = await Users.findOne({email:req.body.email});
  if(check){
      return res.status(400).json({success:false,errors:"Existing User Found with same email id"})
  }
  const user = new Users({
      name:req.body.username,
      email:req.body.email,
      password:req.body.password,
  })
  await user.save();
  const data = {
      user:{
          id:user.id
      }
  }
  const token = jwt.sign(data,'secret_ecom');
  res.json({success:true,token})
})

//Creating Endpoint for User Login
app.post('/login',async(req,res)=>{
  let user = await Users.findOne({email:req.body.email});
  if (user) {
      const passCompare = req.body.password === user.password;
      if(passCompare){
          const data = {
              user:{
                  id:user.id
              }
          }
          const token = jwt.sign(data,'secret_ecom');
          res.json({success:true,token});
      }
      else{
          res.json({success:false,errors:"Wrong Password"});
      }
  }
  else{
      res.json({success:false,errors:"Wrong Email Id"});
  }
})*/

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello Developer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})