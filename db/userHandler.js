// Get all data from sampletable  
import QUERIES from "./query";
import db from "./queryHandler";

export const allData = async () => {
    let data = await db.query(QUERIES.FETCH_ALL_DATA)
    return data.rows
}
