﻿"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/infoHardwareHub").build();

connection.on("ReceiveMessage", function (systemInfo) {
    var systemData = JSON.parse(systemInfo);

    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = systemData;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
