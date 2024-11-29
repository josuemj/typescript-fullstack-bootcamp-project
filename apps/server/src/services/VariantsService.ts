import { prisma } from '../lib/prismaClient';

type VariantData = {
  parent_product_id: number;
  variant_name: string;
  price: number;
  image: string;
  collectionid: number;
};

export class VariantService {
  async getAllVariants() {
    return prisma.variant.findMany();
  }
  async getVariantsByParentProduct(parentProductId: number) {
    return prisma.variant.findMany({
      where: { parent_product_id: parentProductId },
    });
  }
  async getVariantById(id: number) {
    return prisma.variant.findUnique({
      where: { id },
    });
  }

  async createVariant(data: VariantData) {
    return prisma.variant.create({
      data,
    });
  }

  async updateVariant(id: number, data: Partial<VariantData>) {
    return prisma.variant.update({
      where: { id },
      data,
    });
  }
  async deleteVariant(id: number) {
    return prisma.variant.delete({
      where: { id },
    });
  }
}
