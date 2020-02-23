const userClass = class ExampleClass {
  constructor(name, age) {
    //you can assign properties arbitrarily in the construtor
    this.name = name;
    this.age = age;
    this.property1 = "a string";
  }

  method1() {
    const prop1 = this.property1;
  }

  method2() {
    console.log("hello world this is a greeting from somewhere");
  }
  get _name() {
    return this.name;
  }
  get _age() {
    return this.age;
  }
  set _name(name) {
    this.name = name;
  }
  set _age(age) {
    this.age = age;
  }
};
//with extending the parent class you must pass the same properties from the parent to the child class and through the super()
class AdminUser extends userClass {
  constructor(name, age) {
    super(name, age);
    this.admin = true;
  }
}

const example_name = "sally struthers";
const age = 12;
const user = new AdminUser(example_name, age);
console.log(user.name);
console.log(user.age);
console.log(user);
console.log(user.admin);
// console.log(user.method2());
module.exports = userClass;
