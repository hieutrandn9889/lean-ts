interface Service {
  execute: () => void;
}

abstract class Foo {
  protected abstract name: string;

  protected abstract execute(): void;

  public defaultMethod(): void {
    console.log("default");
  }
}

class Bar extends Foo {
  protected name!: string;

  public execute(): void {
    console.log("executed");    
  }

  public printName(): void {
    console.log(this.name);
  }
}

function clientCode(): void {
  const bar = new Bar();
  bar.execute();
  bar.defaultMethod();
}

clientCode();
