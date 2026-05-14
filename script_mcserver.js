/////////////////////////////////////////////////
///                                           ///
///           MC SERVER SCRIPT PAGE           ///
///                                           ///
/////////////////////////////////////////////////

// ALL IMPORTS 

import { siteVariables } from './script_variables.js';

// The server/port in reference is the minecraft server
// Minecraft server ip and port numbers are listed in script_variables.js 
// use this website to get more variables https://mcapi.us/#usage
export function fillMinecraftServerStats(page) {
    return new Promise((resolve) => {

        // Index page server check stuff
        if (page === "index") {

            // ping the minecraft server with the IP listed in script_variables.js
            MinecraftAPI.getServerStatus(siteVariables.minecraft_server.ip_address, {
                port: siteVariables.minecraft_server.port_number
                }, function (err, status) {

                // the wrapper for the server status elements
                let serverInfoWrap = document.querySelector('#server_status_wrap');

                // the current minecraft server image
                const serverImg = document.querySelector('.server_icon');
                serverImg.src = siteVariables.minecraft_server.server_icon;

                let serverStatus;


                // If the server can't be reached, only do these things
                if (err || !status.online) {

                    // display the offline message
                    serverStatus = `<h6 class="server_status_item">${siteVariables.minecraft_server.msg_offine}</h6>`

                }

                // if the server can be reached, do these things 
                else {

                    // display the status of the server
                    serverStatus = `<h6 class="server_status_item">${status.online ? siteVariables.minecraft_server.msg_online : siteVariables.minecraft_server.msg_offine}</h6>`

                }

                serverInfoWrap.innerHTML += serverStatus;

                resolve(status);

            })


                /*
                    const serverInfoStatus  = document.getElementById('serverInfoStatus');  // online or offline
                    const serverInfoIP      = document.getElementById('serverInfoIP');      // IP
                    const serverInfoVersion = document.getElementById('serverInfoVersion'); // MC version
                    const serverInfoCount   = document.getElementById('serverInfoCount');   // Playercount
                    const serverInfoMeter   = document.getElementById('serverInfoMeter')    // Playercount Meter
                    const serverLastUpdate  = document.getElementById('lastUpdated');       // Last updated 
                    // last time the server status was updated on minecraft API
                    serverLastUpdate.innerHTML = 'Server Status Updated: ' + new Date();
                    // server IP
                    serverInfoIP.innerHTML = 'Server IP: ' + serverDetails.serverIP;
                    // Server minecraft version
                    serverInfoVersion.innerHTML = 'Game version: ' + serverDetails.gameVersion; 
                // If the server can't be reached, only do these things
                    if (err || !status.online) {
                        serverInfoStatus.innerHTML = serverDetails.offlineMessage;
                        document.querySelector('.player-list').innerHTML = serverDetails.serverOfflineMsg;
                        serverInfoCount.innerHTML = 'Player Count: 0' ;
                        console.log("minecraft server is offline");
                        loadMsg.textContent = loadDetails.minecraftAPI.offline;
                        loadMsg.textContent = loadDetails.minecraftAPI.finished;
                        resolve(status);
                        return;
                    }
                // if the server can be reached, do these things      
                // server online/offline
                    console.log("minecraft server is online");
                    loadMsg.textContent = loadDetails.minecraftAPI.online;
                //Get the list of players online
                    if (status.players.sample && status.players.sample.length > 0) {
                // if there are people actually online
                // create an object inside the playerList array for each player online
                // joins the array with text elements and displays it on the site
                        status.players.sample.forEach(player => {
                            playerList.push(`<li><img class="mc-face" src="https://minotar.net/avatar/${player.name}/32"><h6>${player.name}</h6></l1>`); // Adds each onlines players name to the array
                        });                                                                                                                              // also places the characters skin icon next to name
                        document.querySelector('.player-list').innerHTML = playerList.join(''); // displays the array in the HTML element
                    }
                    else {
                // if no one is online
                // displays message found in variables
                        document.querySelector('.player-list').innerHTML = serverDetails.deadServerMsg;
                    }
                // all items in the server list area
                    // server status => only if online
                    serverInfoStatus.innerHTML = 'Server Is ' + (status.online ? `<h6 style="color: green;">&nbsp;online</h6>` : `<h6 style="color: red;">&nbsp;offline</h6>`);
                    // Server player count compared to max
                    serverInfoCount.innerHTML = 'Player Count: ' + (status.players.now + '/' + status.players.max);
                    // Server player count meter
                    serverInfoMeter.value = status.players.now;

                    loadMsg.textContent = loadDetails.minecraftAPI.finished;

                    resolve(status);
            });

            */




        }

        // if not on any pages above | resolve out
        else {
            resolve;
        }
    });
}