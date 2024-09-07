# Node version based on linux distribution
FROM node:20.11.0-bullseye

# Create workdirectory
WORKDIR /app

# Copy your package.json
COPY package.json ./

# Install dependencies
RUN npm i

# Copy all files
COPY . .

EXPOSE 5173
# Execute command
CMD ["npm", "run", "dev"]