
# basic-store-js
Little Store Js for NodeJs and The front dev

## Install

    npm install --save basic-store-js

## In Node.js

Example in the main file

	var store       = require('basic-store-js');
    var http        = require('http').Server(app);
    var io          = require('socket.io')(http);

    store.set('app', app);
    store.set('io', io);

In another module

	var store       = require('basic-store-js');
    var io          = store.get('io');
    var app         = store.get('app');

## In Front Js

    import store from "basic-store-js";
    import SocketClient from 'socket.io-client';

    store.set('socket', SocketClient('http://192.168.1.15:3000'));
