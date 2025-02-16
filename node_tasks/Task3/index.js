import express from 'express'
import { get_names, get_sum_of_salaries, getFakeDataBooks, getFakeDataFruits } from './functions.js';
const app = express();

const PORT = 4001;

app.listen(PORT, () => {
    console.log("Server is working");
})

app.get("/empNames", async (req, res) => {
    const data = await get_names();
    res.send(data);
})
app.get("/sumsalaries", async (req, res) => {
    const sum = await get_sum_of_salaries();
    res.send({ sum: sum });
})
app.get("/books", async (req, res) => {
    const books = getFakeDataBooks();
    res.send(books);
})
app.get("/fruits", async (req, res) => {
    const fruits = getFakeDataFruits();
    res.send(fruits);
})
