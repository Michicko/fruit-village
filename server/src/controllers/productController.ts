import { Request, Response } from "express";
import { getDataSource } from "../config/data-source.js";
import { Product } from "../entities/Product.js";

const DataSource = await getDataSource();
const productRepository = DataSource.getRepository(Product);

export const getProducts = async (_req: Request, res: Response) => {
  const products = await productRepository.find();

  res.status(200).json({
    status: "success",
    results: products.length,
    data: products,
  });
};

export const createProduct = async (req: Request, res: Response) => {
  const product = new Product();

  const { name, price, stock } = req.body;

  product.name = name;
  product.price = price;
  product.stock = stock;

  await productRepository.save(product);

  res.status(201).json({
    status: "success",
    data: {
      product,
    },
  });
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await productRepository.findOneBy({
    id: +id,
  });

  if (!product) {
    res.status(404).json({
      status: "error",
      message: `No product with id ${id}`,
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;

  let product = await productRepository.findOneBy({
    id: +id,
  });

  if (!product) {
    res.status(404).json({
      status: "error",
      message: `No product with id ${id}`,
    });
  } else {
    
    product.name = name;
    product.price = price;
    product.stock = stock;
    
    await productRepository.save(product);

    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await productRepository.findOneBy({
    id: +id,
  });

  if (!product) {
    res.status(404).json({
      status: "error",
      message: `No product with id ${id}`,
    });
  } else {
    await productRepository.remove(product);

    res.status(204).json({
      status: "success",
      data: null,
    });
  }
};
