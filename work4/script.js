
const UIController = function(){

    const Food =function(name,number){
        // this.id=id;
        this.name=name;
        this.number=number;
    };

    const Liquar =function(name,number){
        // this.id=id;
        this.name=name;
        this.number=number;
    };

    const Necessaries =function(name,number){
        // this.id=id;
        this.name=name;
        this.number=number;
    };

    let allobject={
        amoOfFood:[],
        amoOfLiquar:[],
        amoOfNecessaries:[]
    }

    return {

        createObject:(type,name,num)=>{
            let newObject;

            if(type === `foods`) { //入力されたものの種別(type)に応じてオブジェクトを作成
                newObject = new Food(name,num);
                allobject.amoOfFood.push(newObject);
                // console.log(food);
            } else if (type === `liquor`) {
                newObject = new Liquar(name,num);
                allobject.amoOfLiquar.push(newObject);
                // console.log(liquar);
            } else if (type === `necessaries`) {
                newObject = new Necessaries(name,num);
                allobject.amoOfNecessaries.push(newObject);
                // console.log(necessaries);
            }


        },

        addItem:(type,name,num)=>{
            let html,newHtml;
            

            if(type === `foods`) { 
                html = '<div class="item food-item" id="food-item-0"><div class="name">%name%</div><div class="counter">%num%</div></div>';

            } else if (type === `liquar`) {

                html = `<div class="item liquar-item" id="liquar-item-0"><div class="name">%name%</div><div class="counter">%num%</div></div>`;


            } else if (type === `necessaries`) {

                html = `<div class="item necessaries-item" id="necessaries-item-0"><div class="name">%name%</div><div class="counter">%num%</div></div>`;

            }

            newHtml = html.replace('%name%',name);
            newHtml = newHtml.replace('%num%',num);
            document.querySelector(`.${type}-list`).insertAdjacentHTML('beforeend',newHtml);
            
        }
    }

};

const InventoryController = function() {

        // let type,nameOfThing,numberOfThing;
 
    return{

        //入力されものの名前と数を記録する関数
        countInventory: () =>{ 
            return{
                type:document.querySelector('.type').value,
                nameOfThing:document.querySelector('.name-of-thing').value,
                numberOfThing:document.querySelector('.number-of-thing').value,
            }
        }
        
    }
};


const controller = function(UICtrl,InventoryCtrl) {

    document.querySelector('.button').addEventListener('click',() =>{

        //入力されものの名前と数を記録

        let newItem =InventoryCtrl.countInventory();
        console.log(newItem.nameOfThing);
        console.log(newItem.numberOfThing);
        UICtrl.createObject(newItem.type,newItem.nameOfThing,newItem.numberOfThing);

        

        //入力された内容を画面に表示
        UICtrl.addItem(newItem.type,newItem.nameOfThing,newItem.numberOfThing);
    
    });


    
        
}(UIController(),InventoryController());






