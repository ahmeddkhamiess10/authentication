FROM node:16

# Create the directory (this is optional if you are setting WORKDIR next)
RUN mkdir -p /home/app

# Set the working directory
WORKDIR /home/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies in the working directory
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application from the working directory
CMD ["npm", "run", "dev"]
