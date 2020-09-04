export default (mongoose) => {
  const gradeSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      min: 0,
    },
    lastModified: {
      type: Date,
      require: true,
      default: Date.now,
    },
  });

  const gradeModel = mongoose.model('grade', gradeSchema);
  return gradeModel;
};
