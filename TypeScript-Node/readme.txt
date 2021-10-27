

// Package.json configuration

{
  "name": "typescript-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",                                         // con npm run build, se corre tsc que crea 
                                                               transpila el codigo TipeScript y genera el
                                                               archivo app.js definido en la linea 50 de 
                                                               tsconfig.json  "outDir": "./build" (es el mismo nombre que el typescript pero .js)
    "clean": "rm -rf build",                                // con npm run clean, se borra la carpeta build con la transpilacion 

    "start": "npm run build && node build/app.js",          // con npm run start, se corre el script build para
                                                               transpilar el typescript y luego  se corre el archivo transpilado
    "dev": "concurrently \"tsc -w\" \"nodemon build/app.js\"" // con npm run dev, se corre el comando tsc --watch para ver en tiempo real
                                                               la transpilacion de typescript y los errores de syntax y el nodemon para ver
                                                               en tiempo real los cambios en el servidor node. Correr estos dos comandos en una 
                                                               sola consola es posible gracias a la dependecia concurrently. Se usan las barras invertidas 
                                                               para mantener la estructura de JSON
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/express": "^4.17.13",    //dependencia para que typescript entienda el leguaje del paquete npm express
    "@types/node": "^16.11.4",       //dependencia para que typescript entienda el lenguaje del paquete npm node
    "concurrently": "^6.3.0",        //dependencia para que se pueda correr en una sola consola tanto tsc -w como nodemon
    "nodemon": "^2.0.14",            // el watchdog de node para cambios en tiempo real.
    "typescript": "^4.4.4"           //dependencia de typescript
  }
}
