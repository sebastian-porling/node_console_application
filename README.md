# Console Application

This solution is made by Sebastian Porling.

## Execution

You can run the application through Node.js:

```bash
node index.js
```

## Motivation and Explaination

The **index.js** is the main class. It promts the user a question with different options and process the option. While the rest of the javascript files processes the specific action. The **fileSystem.js** reads the package.json file and prints out the content as JSON to the console. The **operatingSystem.js** displays some OS related information to the console.
The **httpServer.js** opens up a http server on the given port and handles requests on "/" and displays 404 on the rest. We display a html page by reading it with the file system package and returning the html data to the user agent.