import { validationResult } from "express-validator"
import { jsonGenerate } from "../utils/helper.js";
import Todo from "../models/Todo.js";
import User from "../models/User.js";
import { StatusCode  } from "../utils/constants.js";

export const RemoveTodo = async(req,res) => { 
    const error = validationResult(req)

    if(!error.isEmpty()){
        res.json(jsonGenerate(StatusCode.VALIDATION_ERROR, "to do is required", error.mapped()));

    }
    try{
        const result = await Todo.findOneAndDelete({
            userId:req.userId,
            _id:req.body.todo_id,
        });

        if(result){
            const user = await User.findOneAndUpdate({
                _id:req.userId,
            },
            {$pull:{todos:req.body.todo_id}}
            );
            return res.json(jsonGenerate(StatusCode.SUCCESS,'Todo deleted',null))
        }
    }catch(error){
        return res.json(jsonGenerate(StatusCode.UNPROCESSABLE_ENTITY,'could not be deleted',null))

    }
 };