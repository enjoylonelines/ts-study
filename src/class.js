"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Car_id;
// 추상클래스, 인터페이스
class shadow {
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}
class MyShadow extends shadow {
    getPrice() {
        return this.price;
    }
}
class Category {
    getType() {
        return this.type;
    }
    constructor(type) {
        this.type = type;
    }
}
class Car extends Category {
    constructor(type, price, name) {
        super(type);
        _Car_id.set(this, void 0); // es6 버전 private
        this.price = price;
        this.name = name;
    }
    getId() {
        return __classPrivateFieldGet(this, _Car_id, "f");
    }
}
_Car_id = new WeakMap();
const car = new Car('qewrq', 100, 'hb');
console.log(car.getType());
let num = 0;
const func = (value) => { return num; };
