import express from 'express'
import { database_router } from './routes/database/database.routes.js';

const app = express();

const PORT = 4000;



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
app.use(express.json());
app.use(database_router);