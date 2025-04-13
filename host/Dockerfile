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

# Install serve to serve static content
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist /app/dist

# Expose the port the app runs on
# EXPOSE 4321

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "4321"]