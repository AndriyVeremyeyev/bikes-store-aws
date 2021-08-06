import { v4 as uuid } from "uuid";
import AWS from "aws-sdk";

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createBike(event, context) {
  const {
    model,
    brand,
    color,
    size,
    price,
    category,
    availability,
    quantity,
    bestSeller,
    newArrival,
    details,
    imageUrl,
  } = event.body;

  const now = new Date();

  const bike = {
    id: uuid(),
    model,
    brand,
    color,
    size,
    price: Number(price),
    category,
    availability,
    quantity: Number(quantity),
    bestSeller: bestSeller === "true" ? true : false,
    newArrival: newArrival === "true" ? true : false,
    details,
    imageUrl,
    timeOpen: now.toISOString(),
  };

  await dynamodb.put({ TableName: "BikesTable", Item: bike }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify(bike),
  };
}

export const handler = createBike;
