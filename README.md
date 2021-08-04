# Notifications in real time
Prof of Concept with conection between redis ([PUBSUB](https://redis.io/topics/pubsub)), node and React through WS 

Basics from a notification system in real-time 

# Requirements:
- Redis running in port 6379 (Docker image is valid)
- NPM


# Installation
```
$ cd /frontend
$ npm install

$ cd /backend 
$ npm install

$ docker pull redis
```

# How to Test
1. First we need to start redis in the port 6379, below we are starting the image of redis under the container name redis-server-dashpy

```
$ docker run --name redis-server-dashpy -p 6379:6379 -d redis
```

2. Start the backend server
    ```
    $ cd backend/
    $ node server
    (optional) $ node subscriber1
    (optional) $ node subscriber2
    ```
3. Start the frontend
    ```
    $ cd frontend/
    $ npm start
    ```

Once running the node server and react application you can check inside the network tooling the WS tab (this belong to the websocket communication), if everything is right you should be able to see a message (gelou by default) with the port 3030 running in your host (127.0.0.1 by default). 

Once you see this you can use redis to check the flow.

In redis-cli use the command to send a message throught the system:

```
PUBLISH user-notify gelou-3
```

This message should appear in the network tab and in the console from the browser
