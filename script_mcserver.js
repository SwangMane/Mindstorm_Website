// On initial site load grab the server status
// The server/port in reference is the minecraft server
// Minecraft server ip and port numbers are listed in Variables.js 
// This function is available becuase I called <script src="https://mcapi.us/scripts/minecraft.min.js"> ins server.html
// use this website to get more variables https://mcapi.us/#usage
export function checkMinecraftServer() {
    return new Promise((resolve) => {
        MinecraftAPI.getServerStatus(serverDetails.serverIP, {
            port: serverDetails.serverPort
            }, function (err, status) {
                // the loading message
                const loadMsg = document.querySelector(loadDetails.className);
                loadMsg.textContent = loadDetails.minecraftAPI.initial;

            // all constants inside the server details tab
                const serverInfoImg     = document.querySelector('.server-image');      // server image
                const serverInfoStatus  = document.getElementById('serverInfoStatus');  // online or offline
                const serverInfoIP      = document.getElementById('serverInfoIP');      // IP
                const serverInfoVersion = document.getElementById('serverInfoVersion'); // MC version
                const serverInfoCount   = document.getElementById('serverInfoCount');   // Playercount
                const serverInfoMeter   = document.getElementById('serverInfoMeter')    // Playercount Meter
                const serverLastUpdate  = document.getElementById('lastUpdated');       // Last updated 
            // fill these constants out no matter what
                // Server Image Icon
                serverInfoImg.src = serverDetails.serverImg;
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
    });
}