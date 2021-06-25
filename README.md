# Get started

- create .env and .env.prod files at the source of the repo with the following structure:
```
NODE_ENV=development # change to 'production' for .env.prod
NODE_PORT=8080
NODE_SECRET=dev_template_secret
NODE_SESSION_SECRET=dev_template_secret

MONGO_DB_PORT=27017
MONGO_DB_MAIN=readlatte # TODO: change to your db name
MONGO_DB_URI=mongodb://mongo:27017/
MONGO_ROOT_USERNAME=dev_template_username
MONGO_ROOT_PASSWORD=dev_template_password

MONGO_EXPRESS_ADMINUSERNAME=dev_template_username2
MONGO_EXPRESS_ADMINPASSWORD=dev_template_password2
```

- navigate to root / of the project
- run `docker-compose build` to build the image
- run `docker-compose up` to spin up our containers

The last command will start a mongodb container, a mongo-express container to inspect our mongo databases and our express api container.

# Production build
To spin our containers in production, you'll need to run the `start_prod.sh` script which will use the `docker-compose.prod.yml` file