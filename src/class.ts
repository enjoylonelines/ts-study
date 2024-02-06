// 추상클래스, 인터페이스
abstract class shadow implements carInterface{ // 메서드 구현 가능 >> 메서드 상속, 확장 (상속 구조) 
    name: string;
    price: number;
    abstract id: string;
    abstract getPrice(): number; // 추상 메서드는 구현 불가능 >> 구조 정의
    getName(){
        return this.name;
    }
    getId(): string {
        return this.id;
    }
}

interface carInterface{ // 다중 상속 가능, 상속관계가 아닌 서로 다른 클래스의 공통 기능을 묶어서 정의할 떄 사용
     price: number;
     name: string;
     getId(): string;
}
class MyShadow extends shadow{
    name: string;
    price: number;
    getPrice(): number {
        return this.price;
    }
}
class Category{
    type: string;
    getType(){
        return this.type;
    }
    constructor(type:string){
        this.type = type;
    }
}
class Car extends Category implements carInterface{
    price: number;
    name: string;
    #id: string; // es6 버전 private
    constructor(type: string, price: number, name: string){
        super(type);
        this.price = price;
        this.name = name;
    }
    getId(){
        return this.#id;
    }

}
const car: Car = new Car('qewrq', 100, 'hb');
console.log(car.getType());
let num = 0;
const func = (value: number) => {return num};