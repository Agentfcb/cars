type Car = {
    id: number;
    brand: string;
    model: string;
    year: number;
    used: boolean;
    price: number;
};

let cars: Car[] = [];
let nextId: number = 1;

function addCar(brand: string, model: string, year: number, used: boolean, price: number): void {
    const newCar: Car = {
        id: nextId,
        brand: brand,
        model: model,
        year: year,
        used: used,
        price: price
    };
    cars.push(newCar);
    nextId++;
    console.log("Добавлена машина: " + brand + " " + model);
}

function showAllCars(): void {
    console.log("\n ВСЕ МАШИНЫ ===");
    
    if (cars.length === 0) {
        console.log("Каталог пуст");
        return;
    }
    
    for (let i = 0; i < cars.length; i++) {
        const car = cars[i];
        const status = car.used ? "Б/У" : "Новая";
        console.log(`ID: ${car.id} | ${car.brand} ${car.model} | ${car.year}г. | ${status} | ${car.price} руб.`);
    }
}

function findCar(id: number): Car | null {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            console.log(`Найдена: ${cars[i].brand} ${cars[i].model}`);
            return cars[i];
        }
    }
    console.log(`Машина с ID ${id} не найдена`);
    return null;
}

function updateCar(id: number, newPrice: number): boolean {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            cars[i].price = newPrice;
            console.log(`Обновлена цена у ID ${id}: ${newPrice} руб.`);
            return true;
        }
    }
    console.log(`Машина с ID ${id} не найдена`);
    return false;
}

function deleteCar(id: number): boolean {
    const newCars: Car[] = [];
    let found = false;
    
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id !== id) {
            newCars.push(cars[i]);
        } else {
            found = true;
        }
    }
    
    cars = newCars;
    
    if (found) {
        console.log(`Удалена машина ID ${id}`);
    } else {
        console.log(`Машина с ID ${id} не найдена`);
    }
    
    return found;
}

console.log(" ПРОГРАММА НА ТИПАХ ");
console.log("CRUD операции для каталога машин\n");

addCar("Toyota", "Camry", 2022, false, 2500000);
addCar("BMW", "X5", 2020, true, 3500000);
addCar("Lada", "Vesta", 2023, false, 1200000);

showAllCars();

console.log("\n Поиск ");
findCar(2);

console.log("\n Изменение ");
updateCar(1, 2400000);

console.log("\n Удаление ");
deleteCar(3);

console.log("\n РЕЗУЛЬТАТ ");
showAllCars();

console.log("\n ПРОГРАММА ЗАВЕРШЕНА ");