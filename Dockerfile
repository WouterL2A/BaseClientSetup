# Use Node.js as the base image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g @angular/cli @ionic/cli && npm install

# Copy the rest of the application files
COPY . .

# Expose development ports
EXPOSE 8100 4200 35729

# Start the Ionic server
CMD ["npx", "ionic", "serve", "--host=0.0.0.0", "--port=8100"]