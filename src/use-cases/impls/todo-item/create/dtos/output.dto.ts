import { TodoItemMem } from "../../../../../entities/impls/mem/todo_item_mem.entity";

export type CreateTodoItemOutputDto = TodoItemMem & {
  id: number;
};
