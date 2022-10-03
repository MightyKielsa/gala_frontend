FROM node:16.15.1-alpine
WORKDIR /gala_frontend
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]