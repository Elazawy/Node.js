import { faker } from "@faker-js/faker";
import fs from 'fs/promises'

const get_names = async () => {
    try {
        const data = await fs.readFile("employees.json", 'utf-8');
        let employees = JSON.parse(data);
        let names = employees.map((emp) => emp.name);
        return names;
    } catch (error) {
        return error;
    }
}

const get_sum_of_salaries = async () => {
    try {
        const data = await fs.readFile("employees.json", 'utf-8');
        let employees = JSON.parse(data);
        let sum = employees.reduce((prev, curr) => prev + curr.salary, 0);
        return sum;
    } catch (error) {
        return error;
    }
}
const getFakeDataBooks = () => {

    const books =  Array.from({ length: 10 } , (_ , idx)=>{
          return {
              id: idx + 1,
              author: faker.book.author(),
              name: faker.book.title(),
              genre: faker.book.genre(),
          }
      })
  
    return books;
}
const getFakeDataFruits = () => {

    const fruits =  Array.from({ length: 10 } , (_ , idx)=>{
          return {
              id: idx + 1,
              name: faker.food.fruit(),
              description: faker.food.description(),
              dish: faker.food.dish(),
          }
      })
  
    return fruits;
  }
export { get_names, get_sum_of_salaries, getFakeDataBooks, getFakeDataFruits};