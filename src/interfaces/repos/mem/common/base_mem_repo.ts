import { MemEntity } from "../../../../entities/impls/mem/mem.entity";
import { InMemRepo } from "./mem_repo";

export abstract class BaseMemRepo<T extends MemEntity> implements InMemRepo<T> {
  public abstract create(input: Omit<T, "id">): T;

  public abstract getById(id: number): T;

  public abstract getAll(): T[];
  //
  // public abstract update(input: T): T;

  public abstract delete(id: number): void;
}
