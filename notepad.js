var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User;
(function (User) {
    User[User["guest"] = 0] = "guest";
    User[User["member"] = 1] = "member";
    User[User["admin"] = 2] = "admin";
})(User || (User = {}));
var SmartContract = /** @class */ (function () {
    function SmartContract(contract, userInfo, userNum) {
        this.contract = contract;
        this.userInfo = userInfo;
        this.userNum = userNum;
    }
    SmartContract.prototype.getUserNum = function () {
        return "".concat(this.userNum, ",").concat(this.userInfo.name);
    };
    return SmartContract;
}());
var NewContract = /** @class */ (function (_super) {
    __extends(NewContract, _super);
    function NewContract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewContract.prototype.getUSerInfo = function () {
        console.log(this.userNum, this.userInfo.name);
    };
    return NewContract;
}(SmartContract));
var con1 = new NewContract("stax", { name: "sibal" }, 1);
console.log(con1.getUserNum());
