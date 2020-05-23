// Add user to DB if does not exists. 
import QUERIES from "./query";
import db from "./queryHandler";

export const allData = async () => {
    let data = await db.query(QUERIES.FETCH_ALL_DATA)
    return data.rows
}
