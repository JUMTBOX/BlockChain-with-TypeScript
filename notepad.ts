enum User {
  guest = 0,
  member = 1,
  admin = 2,
}

interface Info {
  name: string;
  id?: string;
  password?: string;
  age?: number;
}

abstract class SmartContract {
  constructor(
    private contract: string,
    protected userInfo: Info,
    public userNum: User
  ) {}
  abstract getUSerInfo(): void;

  getUserNum() {
    return `${this.userNum},${this.userInfo.name}`;
  }
}

class NewContract extends SmartContract {
  getUSerInfo(): void {
    console.log(this.userNum, this.userInfo.name);
  }
}

const con1 = new NewContract("stax", { name: "sibal" }, 1);

console.log(con1.getUserNum());
