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
    private userInfo: Info,
    public userNum: User
  ) {}
  getUSerInfo() {
    return `${this.userInfo}`;
  }
}

class NewContract extends SmartContract {}
