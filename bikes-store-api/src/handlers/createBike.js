async function createBike(event, context) {
  // model: string
  // brand: string
  // color: string
  // size: string
  // price: number
  // category: string
  // availability: string
  // quantity: number
  // bestSeller: boolean
  // newArrival: boolean
  // details: string
  // timeOpen: date

  return {
    statusCode: 200,
    body: JSON.stringify({ event, context }),
  };
}

export const handler = createBike;
