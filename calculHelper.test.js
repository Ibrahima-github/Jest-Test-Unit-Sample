import { afficherMessageCalculAir } from "./calculHelper";

// Création d'une suite de tests
describe('Test de la fonctionnalité afficherMessageCalculAir', () => {
    // Test 1: tester un libellé avec des valeurs correctes pour calculAir
    test('Tester un libellé avec des valeurs correctes pour calculAir', () => {
        expect(afficherMessageCalculAir(10, 10)).toContain('100');
    })
    
    // Test 2: tester le libellé avec des valeurs incorrectes pour calculAir
    test('Tester un libellé avec des valeurs incorrectes pour calculAir', () => {
        expect(afficherMessageCalculAir(10, 'toto')).toBe(`L'air ne peut pas être calculée`);
    })

    test('Tester un libellé avec des valeurs vides pour calculAir', () => {
        expect(afficherMessageCalculAir()).toBe(`L'air ne peut pas être calculée`);
    })

    test('Tester un libellé avec des valeurs tableaux pour calculAir', () => {
        expect(afficherMessageCalculAir([], [])).toBe(`L'air ne peut pas être calculée`);
    })

    test('Tester un libellé avec des valeurs objets pour calculAir', () => {
        expect(afficherMessageCalculAir({}, {})).toBe(`L'air ne peut pas être calculée`);
    })
});
