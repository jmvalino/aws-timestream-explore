import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

export const query = new AWS.TimestreamQuery({});

export const write = new AWS.TimestreamWrite({});
