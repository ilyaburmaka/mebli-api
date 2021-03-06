# stage 1 building the code
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# stage 2
FROM node
WORKDIR /usr/app
COPY package*.json ./
COPY --from=builder ./ ./nodemon.json
RUN npm install --production

COPY --from=builder /usr/app/dist ./dist
COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.docker.json ./ormconfig.json

EXPOSE 4000
CMD node dist/src/index.js