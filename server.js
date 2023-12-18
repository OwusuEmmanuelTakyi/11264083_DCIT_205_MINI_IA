const express = require('express');
const app = express();
const port = 4001; 
import  express  from 'express';
import {connectDb} from "./database/db.js"

await connectDb("mongodb://localhost:27017/yourDatabaseName")

export const server = express()