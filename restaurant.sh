#!/bin/bash

# Start the API
echo "Starting API..."
cd Back_End
node api.js & # Exécuter l'API en arrière-plan
echo "API is running."

# Start the Angular application
echo "Starting Angular application..."
cd ../App_Restaurant
ng serve
