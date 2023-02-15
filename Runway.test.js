
const Runway = require('./Runway');


describe('Runway', () => {
    
    

    describe('add', () => {
        test('should add a plane to the runway', () => {
            Runway.planes = [];
            const runway = new Runway('Runway1');
            const plane = 'Plane 1';
            runway.add(plane);
            expect(Runway.planes).toContain(plane);
        });

        test('should throw an error if the runway is at full capacity', () => {
            Runway.planes = [];
            const runway = new Runway('Runway 1');
            for (let i = 0;  i < Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS; i++) {
                runway.add(`Plane ${i}`);
            }
            expect(() => runway.add('Plane 101')).toThrowError(/runways at full capacity!/)
        })

        describe('remove', () => {
            test('should remove a plane from the runway', () => {
                Runway.planes = [];
                const runway = new Runway('Runway 1');
                const plane = 'Plane 1';
                runway.add(plane);
                runway.remove(plane);
                expect(Runway.planes).not.toContain(plane);
            });

            test('should not remove a plane if it is not on the runway', () => {
                Runway.planes = [];
                const runway = new Runway('Runway1');
                const plane1 = 'Plane1';
                const plane2 = 'Plane 2';
                runway.add(plane1);
                runway.remove(plane2);
                expect(Runway.planes).toContain(plane1)
            })
        })
    })
})