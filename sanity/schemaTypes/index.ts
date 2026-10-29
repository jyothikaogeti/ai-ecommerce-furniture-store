import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { customerType } from "./customerType";
import { productType } from "./productType";
import { orderType } from "./orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, customerType, productType, orderType],
};
