class Animal {
    public nome: string;

    constructor (nome: string) {
        this.nome = nome;
    }

    public makeSound(): void {
        console.log('generic animal sound')
    }
}


class Dog extends Animal {
    public makeSound(): void {
        console.log('Woof woof')
    }
}

class Cat extends Animal {
    public makeSound(): void {
        console.log('Meow meow')
    }
}


const dog: Dog = new Dog('Francisco')
dog.makeSound()

const cat: Cat = new Cat('Mingau')
cat.makeSound()
