import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan"; 
import path from "path";
import { fileURLToPath } from "url";

//configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: '.env' });
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use("assests",express.static(path.join(__dirname,'public/assets')));

// file storage
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    },
});

const upload = multer({storage});

//mongoose setup
const MONGO_URI = 'mongodb+srv://Balaguru:Bala%402002@nodeapi.l7sfb.mongodb.net/?retryWrites=true&w=majority'
const port =3001

const PORT = port || 6001;
mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    app.listen(PORT ,()=>{console.log(`server port ${PORT}`)});
})
.catch((error)=>console.log(`${error} did not connect`));