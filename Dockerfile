FROM node:alpine

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
RUN npm install react-scripts@4.0.3 -g --silent 

COPY . .

EXPOSE 3000

CMD [ "npm", "run"] 
