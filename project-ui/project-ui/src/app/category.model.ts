// category.model.ts
export class Subcategory {
  id!: number;
  name!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  category_id!: number;
}

export class Category {
  id!: number;
  name!: string;
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;
  industry_id?: number;
  subcategories: Subcategory[]=[];
}

export class CategoryData {
  archived: Category[];
  published: Category[];

  constructor(data: any) {
    this.archived = data.archived.map((category: any) => {
      return {
        id: category.id,
        name: category.name,
        status: category.status,
        createdAt: new Date(category.createdAt),
        updatedAt: new Date(category.updatedAt),
        industry_id: category.industry_id,
        subcategories: category.subcategories.map((subcategory: any) => {
          return {
            id: subcategory.id,
            name: subcategory.name,
            status: subcategory.status,
            createdAt: new Date(subcategory.createdAt),
            updatedAt: new Date(subcategory.updatedAt),
            category_id: subcategory.category_id,
          };
        }),
      };
    });

    this.published = data.published.map((category: any) => {
      return {
        id: category.id,
        name: category.name,
        status: category.status,
        createdAt: new Date(category.createdAt),
        updatedAt: new Date(category.updatedAt),
        industry_id: category.industry_id,
        subcategories: category.subcategories.map((subcategory: any) => {
          return {
            id: subcategory.id,
            name: subcategory.name,
            status: subcategory.status,
            createdAt: new Date(subcategory.createdAt),
            updatedAt: new Date(subcategory.updatedAt),
            category_id: subcategory.category_id,
          };
        }),
      };
    });
  }
}
