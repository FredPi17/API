FROM node:8.11.3
WORKDIR /Users/fredericpinaud/WebstormProjects/API
COPY package*.json ./
RUN npm install
EXPOSE 3050
COPY . ./
CMD ["npm", "start"]