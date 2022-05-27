abstract class Person {
    abstract name: string;

    constructor (name: string) {
        this.name = name;
    }

    display(): void {
        console.log(this.name)
    }

    abstract find(string): Person;  // Método que vai ser escrito dentro da classe filha
}


class Employee extends Person {
    name: string;
    empCode: number;

    constructor (name: string, code: number) {
        super(name);
        this.empCode = code;
    }

    find(name: string): Person {
        // Executar uma requisição a um banco de dados
        return new Employee(name, 1);
    }
}


let emp: Person = new Employee('James', 100);
emp.display()

let emp2: Person = emp.find('Steve')
