import { Request, Response } from 'express';
import { ProductsService } from '../services/ProductsService';

const productService = new ProductsService();

export class ProductController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const { sort } = req.query; // Extract the sort parameter
      const products = await productService.getAllProducts(sort as string);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }

  async searchProduct(req: Request, res: Response) {
    try {
      const search = req.params.search;
      const products = await productService.searchProduct(search);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to search products' });
    }
  }

  async getProductById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = await productService.getProductById(id);
    res.json(product);
  }

  async createProduct(req: Request, res: Response) {
    const productData = req.body;
    const product = await productService.createProduct(productData);
    res.json(product);
  }

  async updateProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const productData = req.body;
    const product = await productService.updateProduct(id, productData);
    res.json(product);
  }

  async deleteProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await productService.deleteProduct(id);
    res.json({ message: 'Product deleted successfully' });
  }

  async getAllProductsByCollection(req: Request, res: Response) {
    const collectionid  = parseInt(req.params.collectionid); // Extract collection from the route parameter

    const products = await productService.getAllProductsByCollection(collectionid);
    res.json(products);
  }

  async getAllCollections(req: Request, res: Response) {
    const products = await productService.getAllCollections();
    res.json(products);
  }
}