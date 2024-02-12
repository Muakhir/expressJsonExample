import express  from "express";

// express app

const app = express();

// router

const router = express.Router();

// port
const port = +process.env.PORT || 4000

// Json Url

const dataURL = 'https://muakhir.github.io/vue-eomp-data/Data/'

app.use(router)

router.get('/', (req,res)=>{
    res.json({status:res.statusCode, msg: "You're on the Home page"})
})

// fetch all education from data file

router.get('/education', async (req,res)=>{
    let {education} = await (await fetch(dataURL)).json()
    res.json({status:res.statusCode, education})
})

app.listen(port,()=>console.log(`server is running on Port: ${port}`))