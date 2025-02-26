import { faker } from "@faker-js/faker";
// import fs from 'fs/promises'

export const get_fake_data = () => {
    const data = Array.from({length : 20 } , (_, index) => {
        return {
            id : index + 1,
            type : faker.database.type,
            collation : faker.database.collation,
            engine : faker.database.engine
        }
    })
    return data;
}