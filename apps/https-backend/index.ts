import express from "express";
import cors from "cors"
import {SigninSchema, UserSchema} from "@repo/common/types";
import bcrypt from  "bcrypt";
import {prisma_client} from "@repo/db/db";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend_common/secret";

const app = express();
app.use(express.json);
app.use(cors());

app.post("/signup", async (req,res)=>{
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
        const user = await prisma_client.user.create({
            data:{
                email:parsedData.data.username,
                password:hashedPassword,
                name:parsedData.data.name,
            }
        })
        res.json({
            userId: user.id
        })
    }catch(e){
        res.status(401).json({
            message:"User Already exists"
        })
    }

})

app.post("/signin",async (req,res)=>{
    const parsedData = SigninSchema.safeParse(req.body);
    if(!parsedData.success){
        res.json({
            message:"Incorrect Input"
        })
        return;
    }


    const user=await prisma_client.user.findUnique({
        where:{
            email:parsedData.data.username
        }
    });

    if(!user){
        res.status(403).json({
            message:"Not Authorised"
        })
        return;
    }

    const isPasswordCorrect = await bcrypt.compare(
        parsedData.data.password,user.password
    );

    if(!isPasswordCorrect){
        res.status(403).json({
            message:"Not COrrect password"
        })
        return;
    }

    const token = jwt.sign({
        userId : user.id
    },JWT_SECRET);
    res.json({token});

    
})

