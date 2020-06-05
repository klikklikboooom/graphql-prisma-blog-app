# Description 

This app contains the server side structure for a basic blogging application. There are 3 main components.

 - Users
 - Posts
 - Comments


# Getting started 

 - Clone the repository
 - Run npm install
 - Change the docker-compose file in the prisma folder to point to your dev database  
 - Create a config folder in the root directory.
 - To run in dev mode, create a file name called dev.env

Here's an example dev.env 

```
PRISMA_ENDPOINT= <your_prisma_endpont>
PRISMA_SECRET= <your_prisma_secret> 
JWT_SECRET=<your_jwt_secret>
 ```

To run in test mode, the file should be called test.env and to run in prod mode, the file should be called prod.env and should point to the respective endpoints

To generate secrets, you can use the following command

openssl rand -base64 25

 - Run ```npm start``` from the root directory
 - Head over to ```localhost:3000``` to make GraphQL requests.

