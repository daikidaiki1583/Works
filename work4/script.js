
const UIController = function(){

    return {

            addItem:(type,ID,name,num)=>{  //UIに在庫リスト追加
            let html,newHtml;
            
            if(type === `foods`) { 
                html = '<div class="item food-item" id="food-%ID%"><div class="name">%name%<i class="delete-button">×</i></div><div class="plus">+</div><div class="counter">%num%</div><div class="minus">-</div></div>';

            } else if (type === `liquar`) {

                html = `<div class="item liquar-item" id="liquar-%ID%"><div class="name">%name%<i class="delete-button">×</i></div><div class="plus">+</div><div class="counter">%num%</div><div class="minus">-</div></div>`;


            } else if (type === `necessaries`) {

                html = `<div class="item necessaries-item" id="necessaries-%ID%"><div class="name">%name%<i class="delete-button">×</i></div><div class="plus">+</div><div class="counter">%num%</div><div class="minus">-</div></div>`;

            }

            newHtml = html.replace('%ID%',ID);
            newHtml = newHtml.replace('%name%',name);
            newHtml = newHtml.replace('%num%',num);
            document.querySelector(`.${type}-list`).insertAdjacentHTML('beforeend',newHtml);
            
        },

        deleteInput:()=>{
            document.getElementById('select-type').selectedIndex = 0;
            document.querySelector('.name-of-thing').value ='';
            document.querySelector('.number-of-thing').value ='';
        },

        deleteList:(selectorID) => {

            let el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        }
    }

};

const InventoryController = function() {

    const Food =function(id,name,number){
        this.id=id;
        this.name=name;
        this.number=number;
    };

    const Liquar =function(id,name,number){
        this.id=id;
        this.name=name;
        this.number=number;
    };

    const Necessaries =function(id,name,number){
        this.id=id;
        this.name=name;
        this.number=number;
    };

    let allobject={
        amoOfFood:[],
        amoOfLiquar:[],
        amoOfNecessaries:[]
    }
 
    return{

            //入力されものの名前と数を記録する関数
            countInventory: () =>{ 
                return{
                    type:document.querySelector('.type').value,
                    nameOfThing:document.querySelector('.name-of-thing').value,
                    numberOfThing:document.querySelector('.number-of-thing').value,
                }
            },

            createObject:(type,name,num)=>{
                let newObject,ID;

                if(type === `foods`) { //入力されたものの種別(type)に応じてオブジェクトを作成

                    //オブジェクトのIDを作成するための条件分岐
                    if (allobject.amoOfFood.length === 0){ //　Foodオブジェクトの配列の長さが0の場合

                        newObject = new Food(0,name,num);
                        allobject.amoOfFood.push(newObject);
                        console.log(allobject.amoOfFood);

                    } else {

                        newObject = new Food(allobject.amoOfFood.length,name,num);
                        allobject.amoOfFood.push(newObject);
                        console.log(allobject.amoOfFood);

        
                    }

                } else if (type === `liquar`) {

                    if (allobject.amoOfLiquar.length === 0){

                        newObject = new Liquar(0,name,num);
                        allobject.amoOfLiquar.push(newObject);
        

                    } else {

                        newObject = new Liquar(allobject.amoOfLiquar.length,name,num);
                        allobject.amoOfLiquar.push(newObject);

                    }

                } else if (type === `necessaries`) {
                    
                    if (allobject.amoOfNecessaries.length === 0){

                        newObject = new Necessaries(0,name,num);
                        allobject.amoOfNecessaries.push(newObject);
        
                    } else {

                        newObject = new Necessaries(allobject.amoOfNecessaries.length,name,num);
                        allobject.amoOfNecessaries.push(newObject);

                    }

                }

                return newObject

            },

            //配列のオブジェクトを削除
            deleteObject:(type,ID) => {

                if( type === 'food'){
                
                    allobject.amoOfFood.splice(ID,1);
                    console.log(allobject);

                } else if ( type === 'liquar') {
                
                    allobject.amoOfLiquar.splice(ID,1);
                    console.log(allobject);

                
                } else if ( type === 'necessaries' ) {
                
                    allobject.amoOfNecessaries.splice(ID,1);
                    console.log(allobject);
                }    
                
            }

    
        }
};


const controller = function(UICtrl,InventoryCtrl) {

    document.querySelector('.button').addEventListener('click',() =>{

        //入力されものの名前と数を記録

        let newItem =InventoryCtrl.countInventory();
        let newObject = InventoryCtrl.createObject(newItem.type,newItem.nameOfThing,newItem.numberOfThing);
        console.log(newObject);

        //入力された内容を画面に表示
        UICtrl.addItem(newItem.type,newObject.id,newObject.name,newObject.number);
        // UICtrl.addItem(newItem.type,newItem.nameOfThing,newItem.numberOfThing);

        //入力された内容をリセットする
        UICtrl.deleteInput();
    
    });

    const ctrlDeleteItem = function(event){
        let ids,splitID,type,id;
        // console.log(event.target.parentNode.parentNode);
        ids =event.target.parentNode.parentNode.id;

        splitID = ids.split('-');
        type = splitID[0];
        id = splitID[1];

        //配列のオブジェクトを削除
        InventoryCtrl.deleteObject(type,id);

        //UIからリスト削除
        UICtrl.deleteList(ids);
        
    };

    document.querySelector('.listall').addEventListener('click',ctrlDeleteItem);
    // document.querySelectorALL('.food-list').forEach(function(deletebutton){

    //     deletebutton.addEventListener('click',function(cur){
    //         let ids =cur.parentNode.parentNode.id;
    //         console.log(ids);
    //     });
        
    // });
    

    
}(UIController(),InventoryController());






