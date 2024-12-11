import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "../entities/Product.js";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "michky",
  password: "michky",
  database: "fruit_village",
  entities: [Product],
  synchronize: true,
//   logging: true
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data source has been initialized");
  })
  .catch((err) => console.log("Error during data source initialization ", err));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};