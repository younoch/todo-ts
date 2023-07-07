import mongoose, { Document, Model, Schema } from 'mongoose';

interface ITodo extends Document {
    UserName: string;
    TodoSubject: string;
    TodoDescription: string;
    TodoStatus: string;
    TodoCreateDate: Date;
    TodoUpdateDate: Date;
}

const DataSchema: Schema = new Schema({
    UserName: { type: String },
    TodoSubject: { type: String },
    TodoDescription: { type: String },
    TodoStatus: { type: String },
    TodoCreateDate: { type: Date },
    TodoUpdateDate: { type: Date },
}, { versionKey: false });

const TodoListModel: Model<ITodo> = mongoose.model<ITodo>("List", DataSchema);

export default TodoListModel;