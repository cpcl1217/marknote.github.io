# Stage 1: Build the Docusaurus site
FROM node:lts as builder

# Set environment variables
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_COLOR=false

# Set the working directory
WORKDIR /app

# Copy all files to the container
COPY . ./

# Install dependencies and build the site
RUN yarn install
RUN yarn build

# Stage 2: Serve the built site using Nginx
FROM nginx:stable-alpine

# Set environment variables for Nginx
ENV PORT 3000
ENV HOST 0.0.0.0

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the built site from the previous stage
COPY --from=builder /app/build .

# Copy Nginx configuration template
COPY nginx.conf /etc/nginx/conf.d/configfile.template

# Replace environment variables in Nginx configuration
RUN sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf"

# Expose the port Nginx will run on
EXPOSE 3000

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
