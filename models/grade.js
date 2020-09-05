export default (mongoose) => {
  const schema = mongoose.Schema({
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

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const gradeModel = mongoose.model('grade', schema);
  return gradeModel;
};
