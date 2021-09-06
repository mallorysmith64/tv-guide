# pull official base image
FROM node:16.8.0-alpine3.11

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY . ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
RUN npm run build   # making stuff in /app/build

# start app
WORKDIR /app/build
CMD ["serve", "-p", "80"]
