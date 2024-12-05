import { ProductCardProps } from "./ProductInfo";


describe('ProductCardProps type test', () => {
    it('should conform to the ProductCardProps type', ()=>{
    const mockProductCardProp: ProductCardProps = {
        id: 1,
        description: "",
        name: "",
        image: "",
        price: 0.1,
        };

        expect(mockProductCardProp).toHaveProperty('id');
        expect(typeof mockProductCardProp.id).toBe('number');

        expect(mockProductCardProp).toHaveProperty('description');
        expect(typeof mockProductCardProp.description).toBe('string');

        expect(mockProductCardProp).toHaveProperty('name');
        expect(typeof mockProductCardProp.name).toBe('string');

        expect(mockProductCardProp).toHaveProperty('image');
        expect(typeof mockProductCardProp.image).toBe('string');

        expect(mockProductCardProp).toHaveProperty('price');
        expect(typeof mockProductCardProp.price).toBe('number');

    });


})