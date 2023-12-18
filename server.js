const express = require('express');
const app = express();
const port = 4001; // Change the port number to 4000 or any available port
import  express  from 'express';
import {connectDb} from "./database/db.js"

await connectDb("mongodb://127.0.0.1:")

export const server = express()