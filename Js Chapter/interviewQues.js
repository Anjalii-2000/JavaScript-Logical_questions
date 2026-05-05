const orders = [
    {
        orderId : 1,
        customerID: 103,
        orderAmount: 600
    },
    {
        orderId : 2,
        customerID: 101,
        orderAmount: 100
    },
     {
        orderId : 3,
        customerID: 102,
        orderAmount: 800
    },
    {
        orderId : 4,
        customerID: 103,
        orderAmount: 600
    },
    {
        orderId : 5,
        customerID: 103,
        orderAmount: 1100
    }
]

const user = [
    {
        customerID : 101,
        customerName: "Rahul",
        customerEmail: "rahul@gmail.com"   
    },
        {
        customerID : 102,
        customerName: "Mohan",
        customerEmail: "mohan@gmail.com"    
    },
        {
        customerID : 103,
        customerName: "Ram",
        customerEmail: "ram@gmail.com"     
    }
]

// find greator 2  no of orders
// name

// 101: 3
// 102: 1
// 103: 1


let result = {

};

orders.forEach((item) => {
    if(!result[item.customerID]){
       result[item.customerID] = 1;
    }
    else{
       result[item.customerID] = result[item.customerID] + 1;
    }
})

user.forEach((ele) => {
    const totalOrders = result[ele.customerID];

    if(totalOrders > 2){
    console.log(ele.customerName)
    console.log("id",ele.customerID)
    }
})