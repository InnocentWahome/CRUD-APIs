const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['employee', 'intern'],
    default: 'employee',
  },
  phoneNumber: {
    type: Number,
    required: false,
    unique: true,
  },
  password: String,
  dateOfBirth: {
    type: Date,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default: false,
  },
}, {
  timestamps: true,
});

EmployeeSchema.pre('save', function () {
  if (this.isModified('password')) {
    const salt = bcrypt.genSalt(10);
    bcrypt.hash(this.password, salt);
  }
});

EmployeeSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});

module.exports = model('Employee', EmployeeSchema);
