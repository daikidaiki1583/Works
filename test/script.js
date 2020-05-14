// //querySelectorAllとforEach
// const nodeLists = document.querySelectorAll('.test');

// nodeLists.forEach(element => {
//     const test = element.innerHTML = 'test';
//     console.log(test);
// }) ;

// //Map
// const dog = new Map();

// dog.set('kind','Shiba');
// dog.set('color','black');
// dog.set('name','gen');
// dog.set('age',1);


// console.log(dog.get('kind'));

// console.log(dog.size);

// dog.forEach( cur => {
//     console.log(typeof(cur)); Mapはtypeofが使用できる
// });

// const dog2 = {
//     kind:'Shiba2',
//     color:'black2',
//     name:'gen'
// }

// const recipe = ['(nakata)','(nakahara)','(nakagawa)'];
// const resipe2= ['hide','dai','paradice'];

// const map1 =recipe.map( (cur,i) => {
//     const test = cur.replace(cur,resipe2[i]);
//     console.log(i);
//     return test
// });
// console.log(map1);

// let test3=[];
// let map2 =recipe.forEach( (cur,i) => {
//     const test2 = cur.replace(cur,resipe2[i]);
//     console.log(i);
//     test3.push(test2);
// });

// console.log(test3);

// const recipe = 'goooooooglegoooooooooooglegoooooogle';
// // console.log(recipe.replace(/\;/g,'b'));  //  バックスラッシュをつけると(これ→　\　)はそれに続く特殊な文字(*や;)を文字としてみなされるようになる。
// console.log(recipe.replace(/ */g,''));  //*空欄を消す
// console.log(recipe.replace(/go*gle/g,'a')); 
// console.log(recipe.replace(/ *\([^)]*\) */g,''));

//join　配列を取り出して文字列に変換する 引数に''で囲んだ文字列を与えてやるとそれで区切ることができる
// const member = ['jord','kobe','lebron'];
// console.log(member.join());
// console.log(member.join(''));
// console.log(member.join('-')); 
// console.log(member.join('|')); 

//lengthは文字列にも使用できる
// const sringLength = member.map(cur => {
//     return cur.length;
// });

// console.log(sringLength);

// //findIndex 条件に合う配列内の値のインデックス番号を返す
// console.log(sringLength.findIndex((cur) => cur > 5 ));

class Player {
    constructor(name,yearOfBirth,team){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.team = team;
    }

    // get test() {
    //     return this.calculateAge();      
    // }

    calculateAge(){
        this.age =  new Date().getFullYear() - this.yearOfBirth;
        return this.age
    }

}

const lebron = new Player('Lebron',1980,'Lakers');
console.log(lebron.test * 10);
console.log(lebron.calculateAge() * 10);
