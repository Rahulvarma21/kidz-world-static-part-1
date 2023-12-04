let AllButtons = document.querySelectorAll('.button');
let cartValue = document.getElementById('cart-value');
let cartDiv = document.getElementById('cart');
const ItemData  = [{
    name:"This was our pact",
    quantity:0,
    prize:7.49
},
{
    name:"The famous five",
    quantity:0,
    prize:4.59
},{
    name:"Matlida",
    quantity:0,
    prize:6.80
},{
    name:"Harry Potter",
    quantity:0,
    prize:10
},
{
    name:"For Young Readers",
    quantity:0,
    prize:7.29
},{
    name:"Wimpy Kid - DIY",
    quantity:0,
    prize:4.99
},{
    name:"dart board",
    quantity:0,
    prize:17.49
},{
    name:"connect 4",
    quantity:0,
    prize:19.99
},
{
    name:"Jenga",
    quantity:0,
    prize:20.99
},
{
    name:"Monopoly",
    quantity:0,
    prize:19.49
},
{
    name:"bookmarks",
    quantity:0,
    prize:12.49
},
{
    name:"Birthday card",
    quantity:0,
    prize:19.99
},
{
    name:"Stuffed toys",
    quantity:0,
    prize:15.99
},
{
    name:"Dream catcher drawing",
    quantity:0,
    prize:18.49
}];
let storeOfCartItems=[];
let count = 0;
AllButtons.forEach(function (element,index){
    element.addEventListener('click', function(){
        count = count + 1;

        cartValue.innerText = count;

        ItemData[index].quantity=ItemData[index].quantity+1;
        if(!storeOfCartItems.includes(ItemData[index])){
            storeOfCartItems.push(ItemData[index]);
        }
    });
});

cartDiv.addEventListener('click', function (){
    for(let i=0 ; i < storeOfCartItems.length ; i++){
        let ItemObjectTitle = storeOfCartItems[i].name;
        let ItemObjectQuantity = storeOfCartItems[i].quantity;
        console.log('Items:  ' + ItemObjectTitle + ' - Quantity - ' + ItemObjectQuantity );
    }
});