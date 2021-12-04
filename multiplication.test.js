// Etape 1: importer le fichier à tester
const { TestWatcher } = require('@jest/core');
const multiplication = require('./multiplication');

// Etape 2: rédaction du test
test('10 multiplié par 9 égal 90', ()=> {
    // Ce qui est attendu
    expect(multiplication(9, 10)).toBe(90);
})

// test('10 multiplié par 9 égal 90', function() {

// })
// Etape 3: assertion