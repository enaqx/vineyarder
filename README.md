## Description

Vineyarder Front-End.

## Usage

First install the dependencies including grunt if you don't have it yet

``` bash
$ npm install -g grunt-cli
$ npm install
```

### Development

The run the development node server (app/server.js)

``` bash
$ grunt
```

Open [http://localhost:3000](http://localhost:3000)

### Production

To build the 'production' version (app/static.js)

``` bash
$ grunt static
```

This will build a complete static site in `./static` . The best way to test that this is working locally is to install and run a light http server.

``` bash
$ npm install -g http-server
$ cd static
$ http-server
```

Open [http://localhost:8080](http://localhost:8080)
