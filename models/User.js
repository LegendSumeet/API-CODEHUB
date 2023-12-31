const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: { type: String, required: [true, 'is required field'] },
    email: {
      type: String,
      required: [true, 'is required field'],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'is required field'],
      select: false,
    },
  },
  { timestamps: true }
);

const User = model('user', userSchema);

module.exports = User;
