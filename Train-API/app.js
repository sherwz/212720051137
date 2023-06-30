const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define API routes
app.get('/trains', (req, res) => {
  // Implement logic to fetch and filter train data
  const trains = [];

  // Retrieve seat availability and pricing data for each train
  const trainsWithAvailabilityAndPricing = trains.map(train => {
    // Implement logic to retrieve seat availability and pricing data
    const availability = getSeatAvailability(train);
    const pricing = getTrainPricing(train);

    return {
      ...train,
      availability,
      pricing
    };
  });

  res.json(trainsWithAvailabilityAndPricing);
});

// Helper function to get seat availability
function getSeatAvailability(train) {
  // Implement logic to retrieve seat availability for the train
  // Example implementation:
  return {
    sleeper: 50,
    ac: 20
  };
}

// Helper function to get train pricing
function getTrainPricing(train) {
  // Implement logic to retrieve pricing data for the train
  // Example implementation:
  return {
    sleeper: 500,
    ac: 1000
  };
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
