#!/bin/bash

# Set environment variables
export CI=false
export GENERATE_SOURCEMAP=false

# Install dependencies
npm install

# Build the project
npm run build