# Feedtheram NodeJS

_Server side_

## Installation

**Clone**

`git clone https://github.com/Cedric-F/Feedtheram-node.git`

**Dependencies**

* @types express ^ 4.17.2
* @expressjs body-parser ^ 1.19.0
* @expressjs express ^ 4.17.1
* @palantir tslint ^ 6.0.0
* @Microsoft TypeScript ^ 3.8.3

`npm install`

**Server**

`npm start`

_The server listens to port 3000_

## Queries

2 available routes:

**GET**
```
GET /Hello-World/ HTTP/1.1
Host: localhost
Content-Type: application/json
```

**POST**
```
POST /Character/ HTTP/1.1
Host: localhost
Content-Type: application/json
name=string
```

## Cors

Currently undefined.
