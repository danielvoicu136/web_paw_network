# Use an official Node.js image as the base
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose the port (Cloud Run uses port 8080 by default)
EXPOSE 8080

# Set environment variables for production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
