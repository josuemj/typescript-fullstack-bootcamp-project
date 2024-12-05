import { Collection } from "./CollectionsDropDown"

describe('collection type test', () => {
    it('should conform to the collection type', ()=>{
    const mockCollection: Collection = {
        collectionid: 1,
        name: 'Test Collection',
        description: 'This is a test description',
        };

        expect(mockCollection).toHaveProperty('collectionid');
        expect(typeof mockCollection.collectionid).toBe('number');

        expect(mockCollection).toHaveProperty('name');
        expect(typeof mockCollection.name).toBe('string');

        expect(mockCollection).toHaveProperty('description');
        expect(typeof mockCollection.description).toBe('string');

    });


})