const randomStrings =require ('../index');

describe('Probar funcionalidades de randomStrings', () => {
    test('Probando la funcionalidad', () => {
        expect(typeof(randomStrings())).toBe('string');
    });
    test('Comprobar que no existe una ciudad', () => {
        expect(randomStrings()).not.toMatch(/Cordoba/);
    });
});