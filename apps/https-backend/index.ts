import express from "express";
import cors from "cors"
import {UserSchema} from "@repo/common/types";
import bcrypt from  "bcrypt";

const app = express();
app.use(express.json);
app.use(cors());

app.post("./signup", async (req,res)=>{
    const parsedData = UserSchema.safeParse(req.body);
    if(!parsedData.success){
        console.log(parsedData.error);
        res.json({
            message:"Incorrect Input"
        })
        return;
    }
    try{
        const hashedPassword= await bcrypt.hash(parsedData.data.password,10);
        const user = await  
    }
    
})
