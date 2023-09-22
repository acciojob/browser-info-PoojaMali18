//your JS code here. If required.
 // Get the user's browser name and version
        const browserName = navigator.appName;
        const version = navigator.appVersion;

        // Create a message to display
        const message = "You are using " + browserName + " version " + version;

        // Find the div element with the id "browser-info" and set its text content
        const browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = message;