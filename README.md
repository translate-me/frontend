# authentication

## Run project
1. To run authenticantion at first you need verrify if you have docker and docker-compose in your machine.
2. Use command:
> docker-compose up --build   

Obs: Is important verify if your docker have sudo permission to execute commands

## Development tips
1. Watchout about docker's container, because if containers don't setup at begin of development time the application doesn't work.
2. Watchout about structure of react.
3. If you need new requirement add inside package.json.

4. Watchout, when you execute some command inside docker you are executing sudo commands, because of that you need execute:
> sudo chmod -R 777 <"project folder">

After that you can commit your work.
5. Remember of don't commit caches and node_packages.
6. The volume of docker are build inside docker's container that mean you don't have code inside container. You can code in your local machine and the changes will be inside docker.
