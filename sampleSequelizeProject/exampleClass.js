const userClass = class User {
    
    constructor(name, age) {
        this.name = name
        this.age = age
        //you can assign properties arbitrarily in the constructor
        this.property1 = "a string";
    }
    
    method1() {
        const prop1 = this.property1
    }   
    
    method2() {

    }

    get _name() {
        return this.name
    }

    set _name(name) {
        this.name = name
    }
}

class AdminUser extends User {

    constructor(name, age) {
        super(name, age)
        this.admin = true
    }
}

module.exports = userClass