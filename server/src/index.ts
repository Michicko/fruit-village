import { getDataSource } from "./config/data-source";
import { Product } from "./entities/Product";

const init = async () => {
  const AppDataSource = await getDataSource();

  const productRep = AppDataSource.getRepository(Product);

  const product = new Product();
  product.name = "pineapple";
  product.price = 5;
  product.stock = 5;

  await productRep.save(product);

  const products = await productRep.find();
  const firstProd = await productRep.findOneBy({ id: 1 });

  console.log(products, firstProd);

  const pineapple = await productRep.findOneBy({
    name: "pineapple",
  });

  console.log(pineapple);

  // if (pineapple) {
  //   await productRep.remove(pineapple);
  // }
};

init();
