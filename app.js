//2
// class User {
//    constructor(name, age, followers) {
//       this.name = name;
//       this.age = age;
//       this.followers = followers;
//    }
//    getInfo() {
//       console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//    }
// }


// const user1 = new User('Banana', 30, 1000);
// user1.getInfo();

// const user2 = new User('Mango', 25, 500);
// user2.getInfo();


//3
// class Storage {
//    constructor(initialItems = []) {
//       this.items = initialItems;
//    }

//    getItems() {
//       return this.items;
//    }

//    addItem(item) {
//       this.items.push(item);
//    }

//    removeItem(item) {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//          this.items.splice(index, 1);
//       }
//    }
// }

// const storage = new Storage([
//    'Нанітоіди',
//    'Пролонгер',
//    'Залізні жупи',
//    'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]


//4
// class StringBuilder {
//    constructor(value) {
//       this._value = value;
//    }

//    get value() {
//       return this._value;
//    }

//    append(str) {
//       this._value += str;
//    }

//    prepend(str) {
//       this._value = str + this._value;
//    }

//    pad(str) {
//       this._value = str + this._value + str;
//    }
// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='