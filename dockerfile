# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Clone the repository
RUN git clone https://github.com/brainstormerjr/portfolio-2.0.git .

# Install dependencies
RUN npm install

# Build the SvelteKit app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "build"]