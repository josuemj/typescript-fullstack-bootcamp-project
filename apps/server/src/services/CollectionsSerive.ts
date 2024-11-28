import { prisma } from "../lib/prismaClient";

export class CollectionsService {
  async getAllCollections() {
    const collections =  await prisma.collections.findMany();
    return collections.map((collection) => ({
        collectionid: collection.collectionid,
        name: collection.name,
        description: collection.description
           }))
  }

  async getCollectionById(collectionid: number) {
    return prisma.collections.findUnique({
      where: { collectionid },
    });
  }

  async createCollection(data: any) {
    return prisma.collections.create({ data });
  }

  async updateCollection(collectionid: number, data: any) {
    return prisma.collections.update({
      where: { collectionid },
      data,
    });
  }

  async deleteCollection(collectionid: number) {
    return prisma.collections.delete({
      where: { collectionid },
    });
  }
}
