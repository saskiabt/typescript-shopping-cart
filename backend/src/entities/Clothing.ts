import { Entity, Property, PrimaryKey } from "@mikro-orm/core";

@Entity()
export class Clothing {
  @PrimaryKey({ type: "number" })
  id!: number;
  @Property({ type: "string" })
  category!: string;
  @Property({ type: "string" })
  link!: string;
  @Property({ type: "string" })
  title!: string;
  @Property({ type: "string" })
  year!: string;
  @Property({ type: "string" })
  description!: string;
  @Property({ type: "string" })
  culture!: string;
  @Property({ type: "string" })
  medium!: string;
  @Property({ type: "string" })
  designer!: {
    name: string;
    nationality: string;
    yob: string;
  };
  @Property({ type: "date" })
  createdAt = new Date();
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();
}
