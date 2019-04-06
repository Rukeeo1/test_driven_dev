
// var ruk = "we are loving this";
// console.log(module.exports['rukee'] = 'kkkk');
// console.log(module.exports['seyi'] = 'we love this');
// console.log(module)

const myObj = {
    add: function(num1,num2){
        return num1 + num2;
    },
    isNull: function(){
        return null;
    },
    checkValue: function(x){
        return x;
    },
    createUser: function(){
        const user = {firstName:'Rukee', lastName: 'Ojigbo'}
        return user;
    }
}

module.exports = myObj;
// console.log(module)

