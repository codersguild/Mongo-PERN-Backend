![Node.js CI](https://github.com/codersguild/Mongo-PERN-Backend/workflows/Node.js%20CI/badge.svg?branch=master)

# App Backend

Node.js based backend Template

## Install dependencies :

```    
$ npm install
```

## Run the app :

```     
$ npm start
```

## Docker Containers for Mongo & Postgres 

```bash 
$ docker-compose up -d

// Stop Containers
$ docker-compose down
$ docker stop $(docker ps -aq)

// Remove Containers
$ docker rm -f  $(docker ps -aq)
```

MongoDB Connection STRING : mongodb://YourUsername:YourPasswordHere@127.0.0.1:27017/your-database-name

### Node.js Patterns (TBD)

[Some Node.js Patterns](https://softwareontheroad.com/ideal-nodejs-project-structure/?utm_source=github&utm_medium=readme)
