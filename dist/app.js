"use strict";
// const {getAge, getUUId, buildLogger} = require('./plugins')
// import { buildLogger } from "./plugins/logger.plugin";
// const {emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const {getUserById} = require('./js-foundation/03-callbacks')
// const {getUserById} = require('./js-foundation/04-arrow')
// const {buildMakePerson} = require('./js-foundation/05-factory')
// const getPokemonById = require('./js-foundation/06-promises')
// const logger = buildLogger('app.js')
// logger.log('Hola Mundo!');
// logger.error('Esto es algo malo!');
// ------------------------------------------------------------------------
// 1. Template
// console.log(emailTemplate)
// 2. Callback, arrow
// const id = 1;
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error)
//   }
//   console.log({user});
// });
// 3. Factory e inyección de dependencias
// const makePerson = buildMakePerson({getUUId, getAge})
// const john = makePerson({name: 'John', birthdate: '1999-06-02'});
// console.log(john)
// 4. Promises, async, await
// getPokemonById(3)
//   .then((pokemon) => console.log({pokemon}))
//   .catch(() => console.log('Por favor intente de nuevo'))
//   .finally(() => console.log("Finalmente"))
