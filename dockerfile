# Stage 1: Build the application
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the SvelteKit app
RUN npm run build

# Stage 2: Create the production image
FROM node:18 AS production

# Set the working directory
WORKDIR /app

# Copy only the build and static directories from the builder stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "build"]