#!/bin/bash
echo "build the app"
npm run build

echo "Creating the image"
docker build -t unit_test_react_frontend_dev .

echo "Starting container"
docker-compose -f docker-compose.yml up --build -d