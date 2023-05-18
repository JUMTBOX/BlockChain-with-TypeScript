class TypesPractice {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickName: string
  ) {}
}

const doge = new TypesPractice("new", "doge", "doggo");

console.log(doge.nickName);
