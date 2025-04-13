FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Create server directory
RUN mkdir server

# Copy package.json files for server
COPY server/package*.json ./server/

# Install server dependencies
RUN cd server && npm ci --production

# Copy server code
COPY server/server.js ./server/

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

# Expose the port the app runs on
# EXPOSE 7300

# Command to run the application
CMD ["node", "server/server.js"]