const express = require('express')
const app = express()
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { exec }=  require('child_process')
const bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const cors = require("cors");
app.use(cors());
// // app.use(express.static(__dirname, 'public'));



app.post('/api/category', upload.single('image'), (req, res) => {
    var ans={};
    console.log("This is reached")
    var filepath = req.file.path.split("\\");
    exec(`cd C:/Users/DEll/AppData/Local/Programs/Python/Python36 && python last.py C:/Users/DEll/robofriends/${filepath[0]}/${filepath[1]}`, (error,stdout,stderr) =>{
        console.log("This is also reached")
        if(stdout){
            console.log("category:"+stdout);
            ans["cat"] = stdout;
            console.log(ans);
            res.send(ans);
        }
    })

});




app.listen(3001, () => console.log('Example app listening on port 3000!'))
