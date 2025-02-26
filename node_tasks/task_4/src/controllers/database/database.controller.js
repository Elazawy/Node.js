import { get_fake_data } from "../../utils/get_data.js";

export const get_databse_contoller = async (req, res) => {
    const data = get_fake_data();
    if(!data) {
        res.status(404).send("No data found");
    }
    res.status(200).send(data);
}