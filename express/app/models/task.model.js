const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: false,
  },
  assignees: [{
    type: Schema.Types.ObjectId,
    ref: 'Employee',
  }],
  status: {
    type: String,
    enum: ['assigned', 'in-progress', 'under-review', 'completed'],
    default: 'initiated',
  },
  dueDate: {
    type: Date,
  },
}, {
  timestamps: true,
});

module.exports = model('Task', TaskSchema);
