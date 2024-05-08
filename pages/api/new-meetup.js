import { MongoClient } from "mongodb";
export default async function handler(req,res){
    if(req.method==='POST'){
        const data=req.body;
        const {title,image,description, address}=data;
        const client=await MongoClient.connect("mongodb+srv://kedharnadh555:Kedhar.555@cluster0.llzoxit.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0")
        const db=client.db()
        const meetupsCollection=db.collection('meetups')
        const result=await meetupsCollection.insertOne(data);
        console.log("result",result);
        client.close()
        res.status(201).json({message:'Meetup inserted!'})
    }
}