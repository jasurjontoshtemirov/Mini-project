// Shopping Cart obyektini yaratish
const ShoppingCart = {
    cart: [],

    // Mahsulotni savatchaga qo'shish
    addProduct: function (productId, quantity) {
        let product=products.find(p=>p.id===productId);
   

        if (!product) {
            console.log("Bunday mahsulot yo'q");
        }
        const cartItem = this.cart.find((item) => item.id === productId);


        if (cartItem) {
            cartItem.quantity +=quantity            
        }
        else{
            this.cart.push({...product,quantity});
        }
    },

    removeProduct: function (productId) {
        this.cart=this.cart.filter(item=>item.id !== productId);
        console.log(`Mahsulot Idsi : ${productId} savatchadan  o'chirildi`);
        

    },



    
    viewCart: function () {
        if(this.cart.length===0){
            console.log("Savatcha  bo'sh.");            
        }
        else{
            console.log("Savatchadagi  mahsulotlar:");
            this.cart.forEach(item=>{
                console.log(`${item.name} - ${item.quantity} dona - ${item.price*item.quantity}`);
                
            });
            
        }
    },

    getTotalPrice: function () {
        const jami=this.cart.reduce((sum,i)=>sum+i.price*i.quantity,0);
        console.log(`Umumiy summa  : ${jami}`);
        return jami;
    },

    clearCart: function () {
        this.cart=[];
        console.log("Savatcha  tozlandi");
        
    },
};

// Mahsulotni ifodalovchi obyektlar
const products = [{
        id: 1,
        name: "iPhone 12",
        price: 999
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        price: 799
    },
    {
        id: 3,
        name: "Google Pixel 5",
        price: 699
    },
];

// Mahsulotlarni savatchaga qo'shish
ShoppingCart.addProduct(1, 2); // iPhon e 12 qo'shiladi
ShoppingCart.addProduct(2, 1); // Samsung Galaxy S21 qo'shiladi
ShoppingCart.addProduct(1, 1); 

// Savatchadagi mahsulotlarni ko'rish
ShoppingCart.viewCart();

// Umumiy narxni ko'rish
// ShoppingCart.getTotalPrice();

// Mahsulotni savatchadan o'chirish
ShoppingCart.removeProduct(0); // iPhone 12 o'chiriladi

// Savatchadagi mahsulotlarni ko'rish
ShoppingCart.viewCart();

// Savatchani tozalash
// ShoppingCart.clearCart();

// Savatchadagi mahsulotlarni ko'rish (bo'sh savatcha)
// ShoppingCart.viewCart();


// Bu Vazifa juda qiyin ekan lekin 2-kun davomida juda oson bo'lib qoldi lekin zo'r vazifa ekan USTOZ 
