FROM node:16-alpine

# set working directory inside container
WORKDIR /app

# copy app files
COPY . .
# Install dependencies
RUN npm ci

# Build the app
RUN npm run build

# === RUN ===
# different environments (production || development)
ENV NODE_ENV development

# port exposure default 3000
EXPOSE 3000

# Start the app

CMD ["npx", "serve", "build"]
