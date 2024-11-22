import { PrismaClient } from '../prisma/prisma-client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

// Define an array of colors
const colors = [
  'Red',
  'Blue',
  'Green',
  'Yellow',
  'Purple'
];

async function main() {
  // Create 5 collections
  const collections = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      prisma.collection.create({
        data: {
          name: faker.commerce.department(),
          description: faker.lorem.sentence(),
        },
      })
    )
  );

  // Create 10 products
  const products = await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.lorem.paragraph(),
          image: faker.image.url(),
          collections: {
            connect: collections.map((collection) => ({
              id: collection.id,
            })),
          },
        },
      })
    )
  );

  // Create 20 variants
  const variants = await Promise.all(
    Array.from({ length: 20 }).map(() =>
      prisma.variant.create({
        data: {
          productId: faker.helpers.arrayElement(products).id,
          name: faker.commerce.productAdjective(),
          description: faker.lorem.sentence(),
          image: faker.image.url(),
          sku: faker.string.alphanumeric(10),
          price: faker.number.int({ min: 1000, max: 10000 }),
          stock: faker.number.int({ min: 1, max: 100 }),
        },
      })
    )
  );

  // Create 5 options
  const options = await Promise.all(
    Array.from({ length: 5 }).map(() =>
      prisma.option.create({
        data: {
          productId: faker.helpers.arrayElement(products).id,
          name: faker.commerce.productMaterial(),
        },
      })
    )
  );

  // Create 15 option values with random colors from predefined array
  const optionValues = await Promise.all(
    Array.from({ length: 15 }).map(() =>
      prisma.optionValue.create({
        data: {
          optionId: faker.helpers.arrayElement(options).id,
          value: faker.helpers.arrayElement(colors),
        },
      })
    )
  );

  console.log('Seeding completed!');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });