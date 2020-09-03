import mongoose from 'mongoose';
// import { model } from './grade.js';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
// db.grades = model(mongoose);

export { db };
