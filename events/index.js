const eventEmitter = require('events');

const myEmitter = new eventEmitter();

myEmitter.on('supernova', () => {
  console.log('supernova');
});

myEmitter.emit('supernova');

const crew = ['Bob', 'Ammy', 'Dylan', 'Rob'];

const crewMembersNamed = (crew) => {
  console.log(
    `astros: ${crew.slice(0, -1).join(', ')} and ${crew.at(-1)} are ready to get onboard`,
  );
};

myEmitter.on('getting the crew ready', crewMembersNamed);

myEmitter.emit('getting the crew ready', crew);
console.log(myEmitter.eventNames());
