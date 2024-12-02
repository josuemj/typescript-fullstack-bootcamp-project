import { Prisma } from "../../../../packages/database/prisma/prisma-client";
import { prisma } from "../lib/prismaClient";

export class ProductsService {
  async getAllProducts(sort?: string) {
    // Validate the sort parameter
    const orderBy: Prisma.ProductOrderByWithRelationInput | undefined =
      sort === 'asc' || sort === 'desc' ? { price: sort } : undefined;

    const products = await prisma.product.findMany({
      orderBy,
    });

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description ?? '',
      image: product.image,
      price: product.price,
      collectionid: product.collectionid,
    }));
  }

  async searchProduct(search: string) {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: search || '',
          mode: 'insensitive',
        },
      },
    });
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description ?? '',
      image: product.image,
      price: product.price,
      collectionid: product.collectionid,
    }));
  }

  async getAllProductsByCollection(collectionId: number) {
    const products = await prisma.product.findMany({
      where: {
        collectionid: collectionId,
      },
    });
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description ?? '',
      image: product.image,
      price : product.price,
      collectionid: product.collectionid
    }))
  }

  async getProductById(id: number) {
    return prisma.product.findUnique({ where: { id } });
  }

  async createProduct(data: any) {
    return prisma.product.create({ data });
  }

  async updateProduct(id: number, data: any) {
    return prisma.product.update({ where: { id }, data });
  }

  async deleteProduct(id: number) {
    await prisma.variant.deleteMany({
      where: {  id: id },
    });
  
    // Then delete the Product
    return prisma.product.delete({
      where: { id },
    });
    }

    async getAllCollections() {
      const products = await prisma.product.findMany();
  
      return products.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description ?? '',
        image: product.image,
        price : product.price,
        collectionid: product.collectionid
      }))
    }
}