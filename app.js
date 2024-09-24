const hasLicense = true;
const age = 18;
const isDrunk = false;

const result = age >= 18 && hasLicense && !isDrunk;

console.log(`Могу ли я сесть за руль? - ${result ? 'да' : 'нет'}`);