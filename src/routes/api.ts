import express, { Router , Request, Response } from 'express';
import ProfileControllar from '../controllar/ProfileControallar';
import TodoListControallar from '../controllar/TodoListControallar';
import AuthVerifiyMiddlewere from '../middleware/AuthVerifiyMiddlewere';

const router: Router = express.Router();

router.get("/testApi", (req: Request, res: Response) => {
  ProfileControllar.testApi(req, res);
});

router.post("/CreateProfile", (req: Request, res: Response) => {
  ProfileControllar.CreateProfile(req, res);
});

router.post("/UserLogin", (req: Request, res: Response) => {
  ProfileControllar.UserLogin(req, res);
});

router.get("/SelectProfile", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  ProfileControllar.SelectProfile(req, res);
});

router.post("/UpdateProfile", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  ProfileControllar.UpdateProfile(req, res);
});

router.post("/CreateTodo", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  TodoListControallar.CreateTodo(req, res);
});

router.get("/SelectTodo", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  TodoListControallar.SelectTodo(req, res);
});

router.post("/UpdateTodo", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  TodoListControallar.UpdateTodo(req, res);
});

router.post("/UpdateStatusTodo", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  TodoListControallar.UpdateStatusTodo(req, res);
});

router.post("/RemoveTodo", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  TodoListControallar.RemoveTodo(req, res);
});

router.post("/SelectTodoByDate", AuthVerifiyMiddlewere, (req: Request, res: Response) => {
  TodoListControallar.SelectTodoByDate(req, res);
});

module.exports = router;