/**
 * const john = new Person('john','2000','designer');
 *console.log(john);
 *
 * hoistingされないためエラーが返る。
 */

//クラス宣言　hoistingされない
// class Person {
//     constructor (name,yearOfBirth,job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job
//     }
// }

// const john = new Person('john','2000','designer');
// console.log(john);

// class Athlete extends Person {
//     constructor(name,yearOfBirth,job,sports,medals) {
//         super(name,yearOfBirth,job);
//         this.sports = sports;
//         this.medals = medals;
//     }
// }

// const kobe = new Athlete('kobe','1983','athlete','basket','gold');
// console.log(kobe);

const test = {
    name:'',
    birth:''
}

[name] = 'daiki';
console.log([name])