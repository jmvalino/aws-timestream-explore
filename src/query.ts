import { TimestreamQuery } from "aws-sdk";
import { query } from "./timestream";

async function main() {
  const params: TimestreamQuery.QueryRequest = {
    QueryString: `SELECT * FROM "ts-iot-test-db".IoT`,
  };
  try {
    const result = await query.query(params).promise();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

main();
