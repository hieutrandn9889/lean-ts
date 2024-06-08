import { InMemDbOps } from "./db_ops";
import { MemTable } from "./table";

export class MemDb implements InMemDbOps {
  private static _instance: MemDb | undefined;

  private readonly _tables: Map<string, MemTable<unknown>>;

  private constructor() {
    this._tables = new Map();
  }

  public static get instance(): MemDb {
    if (!MemDb._instance) {
      MemDb._instance = new MemDb();
    }
    return MemDb._instance;
  }

  public createTable<T>(name: string): MemTable<T> {
    name = name.trim();
    if (name.length === 0) {
      throw new Error("Table name cannot be empty.");
    }
    if (this._tables.has(name)) {
      throw new Error(`Table "${name}" already exists.`);
    }
    const table = new MemTable<T>(name);
    this._tables.set(name, table);
    return table;
  }

  public getTable<T>(name: string): MemTable<T> | undefined {
    name = name.trim();
    return this._tables.get(name) as MemTable<T>;
  }
}
