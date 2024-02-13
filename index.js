import express  from "express";

// express app

const app = express();

// import axios

import axios from "axios"

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

// router.get('/education', async (req,res)=>{
//     let {education} = await (await fetch(dataURL)).json()
//     res.json({status:res.statusCode, education})
// })

// axios fetch
router.get('/education', async (req,res)=>{
let response = await axios.get (dataURL)
let {education} = await response.data
res.json({status:res.statusCode, education})
})

router.post('/education', async (req,res)=>{
    let response = await axios.post (dataURL,{
        id : idx,
        year: new Date().getFullYear(),
        description: '' || req.body.description
    }
    )
})

router.get('/updateEducation', async(req, res) => {
    let educationIdUpdate = req.params.id
    res.json({ status: res.statusCode,msg: `Updated education: ${educationIdUpdate}` });
});

router.get('/deleteEducation', async(req, res) => {
    let educationIdDelete = req.params.id
    res.json({ status: res.statusCode, msg: `Delete education with ID: ${educationIdDelete}` });
});


router.patch
app.listen(port,()=>console.log(`server is running on Port: ${port}`))

