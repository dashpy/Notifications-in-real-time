# Notifications
PoC with conection between redis ([PUBSUB](https://redis.io/topics/pubsub)), node and React through WS 

Basics from a notification system in real-time 

# Requirements:
- Redis with `user-notify` channel running in port 6379 (Docker is valid)
- NPM


# Installation
```
cd /frontend
npm install

cd /backend 
npm install
```

# How to Test
Once running the node server and react application you can check inside the network tooling the WS tab (this belong to the websocket communication), if everything is right you should be able to see a message (gelou by default) with the port 3030 running in your host (127.0.0.1 by default). Once you see this you can use redis to check the flow.

In redis-cli use the command to send a message throught the system:

```
PUBLISH user-notify gelou-3
```

This message should appear in the network tab and in the console from the browser
