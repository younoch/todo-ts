import { Request, Response } from "express";
import TodoListModel from "../models/TodoListModel";

const TodoListControallar : any = {}; 

TodoListControallar.CreateTodo = (req: Request, res: Response)=>{

    let reqBody = req.body;

    let TodoSubject = reqBody['TodoSubject'];
    let TodoDescription = reqBody['TodoDescription'];
    let UserName = req.headers['username'];
    let TodoStatus = 'New';
    let TodoCreateDate = Date.now();
    let TodoUpdateDate = Date.now();


    let PostBody = {UserName,TodoSubject,TodoDescription,TodoStatus,TodoCreateDate, TodoUpdateDate}
    TodoListModel.create(PostBody, (err: any, data: any) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "success", data: data})
        }
    })

}

TodoListControallar.SelectTodo = (req: Request, res: Response)=>{

    let UserName = req.headers['username'];

    TodoListModel.find({ UserName: UserName}, (err: any, data: any) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}

TodoListControallar.UpdateTodo = (req: Request, res: Response)=>{
    let TodoSubject = req.body['TodoSubject'];
    let TodoDescription = req.body['TodoDescription'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    let PostBody = {TodoSubject,TodoDescription, TodoUpdateDate}

    TodoListModel.updateOne({ _id: _id }, { $set: PostBody }, {upsert: true}, (err: any, data: any) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}
TodoListControallar.UpdateStatusTodo = (req: Request, res: Response)=>{
    let TodoStatus = req.body['TodoStatus'];
    let _id = req.body['_id'];
    let TodoUpdateDate = Date.now();

    let PostBody = {TodoStatus, TodoUpdateDate}

    TodoListModel.updateOne({ _id: _id }, { $set: PostBody }, {upsert: true}, (err: any, data: any) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}
TodoListControallar.RemoveTodo = (req: Request, res: Response)=>{
    let _id = req.body['_id'];

    TodoListModel.remove({ _id: _id }, (err:any, data:any) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data: data})
        }
    })
}

TodoListControallar.SelectTodoByStatus = (req :Request, res :Response)=>{

    // let UserName = req.headers['username'];
    let TodoStatus = req.body['TodoStatus'];

    TodoListModel.find({ TodoStatus}, (err:any, data:any) => {
        if (err) {
            res.status(400).json({status: "fail", data: err})
        } else {
            res.status(200).json({status: "Success", data:data})
        }
    })
}
TodoListControallar.SelectTodoByDate = (req :Request, res :Response)=>{

    let FormDate = req.body['FormDate'];
    let ToDate = req.body['ToDate'];

    TodoListModel.find({ TodoCreateDate : {$gte : new Date(FormDate), $lte : new Date(ToDate)}}, (err:any, data:any) => {
        if (err) {
            res.status(400).json({status : "fail", data : err})
        } else {
            res.status(200).json({status : "Success", data :data})
        }
    })
}

export default TodoListControallar
