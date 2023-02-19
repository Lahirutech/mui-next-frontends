// import mongoose, { Schema, Document, models, model } from 'mongoose';
// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password: string;
// }

// const UserSchema: Schema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// mongoose.models = {} as any;
// const Users = mongoose.model<IUser>('User', UserSchema) || mongoose.models.user;

// export default Users;

import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const Users = models.user || model('user', userSchema);

export default Users;
