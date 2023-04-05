fetch('https://jsonplaceholder.typicode.com/users')
                // our domain name starts here, the path(/useers)
.then(response => response.json())
.then(success => console.log(success))

  // Let's Dig into it, the fetch will be divide in 2 parts the first part will be web browser and second part will be our response promise(object) the fetch method request to browser for data the browser will request to network then network will be first go to the domain name after will go to the given path and find ur data and return it to browser and browser will return it to javaScript;