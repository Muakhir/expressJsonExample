import express  from "express";

// express app

const app = express();

// import axios

import axios from "axios"



import bodyParser from "body-parser";
import cors from "cors";

// router

const router = express.Router();

// port
const port = +process.env.PORT || 4000

// Json Url

const dataURL = 'https://muakhir.github.io/vue-eomp-data/Data/'

app.use(express.json(),
        express.urlencoded({extended:true}),
        cors(),router)

router.get('/', (req,res)=>{
    res.json({status:res.statusCode, msg: "You're on the Home page"})
})

// fetch all education from data file

// router.get('/education', async (req,res)=>{
//     let {education} = await (await fetch(dataURL)).json()
//     res.json({status:res.statusCode, education})
// })

// axios fetch
// router.get('/education', async (req,res)=>{
// let response = await axios.get (dataURL)
// let {education} = await response.data
// res.json({status:res.statusCode, education})
// })

// router.post('/education',bodyParser.json() ,async (req,res)=>{
//     let response = await axios.post (dataURL,{
//         id : idx,
//         year: new Date().getFullYear(),
//         description: '' || req.body.description
//     }
//     )
// })

// router.get('/updateEducation', async(req, res) => {
//     let educationIdUpdate = req.body.id
//     res.json({ status: res.statusCode,msg: `Updated education: ${educationIdUpdate}` });
// });

// router.get('/deleteEducation', async(req, res) => {
//     let educationIdDelete = req.body.id
//     res.json({ status: res.statusCode, msg: `Delete education with ID: ${educationIdDelete}` });
// });

router.get('/education', async (req, res)=>{
    try{
        let response = await axios.get(dataURL)
        let {education} = await response.data
        res.json({
            status: res.statusCode,
            education
        })    
    }catch(e){
        res.json({
            status: res.statusCode, 
            msg: 'Please try again later.'
        })
    }
})


router.post('/addEducation', 
bodyParser.json(), async (req, res)=>{
    try{
        let dataRes = await 
        axios.post(dataURL, req.body)
        if(dataRes){
            /*
            Please remove all consoles before you can deploy your backend.
            */
            console.log(resVal.data);
            res.json({
                status: res.statusCode,
                msg: 'New record was added'
            })
        }
    }catch(e) {
        console.log(e.message);
        // 
        res.json({
            status: res.statusCode,
            msg: 'An error occurred when adding a new data'
        })
    }

})
router.patch('/updateEducation/:id',bodyParser.json(), (req, res)=>{
    // axios.patch(`${dataURL}`, )
})
router.delete('/deleteEducation/:id', 
async (req, res)=>{
    let dataRes = await axios.delete(`${dataURL}/${+req.params.id}`, )
    if(dataRes) {
        res.json({
            status: res.statusCode,
            msg: 'A record was removed'
        })
    }
})



router.patch
app.listen(port,()=>console.log(`server is running on Port: ${port}`))

