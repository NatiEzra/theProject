const fs = require("fs");
const Order = require("../models/order");

async function createOrder(order, res)
{
    const newOrder=new Order({
        user: order.user,
        items: order.items,
        totalAmount: order.totalAmount,
        orderDate: order.orderDate,
        username:order.username
    });
    const x=await newOrder.save();
    return x._id;

}
async function getAllOrders(){
    const orders=await Order.find();
    return orders;
}
async function getUserOrders(userId){
    const orders=await Order.find({user: userId});
    return orders;
}

module.exports = { 
createOrder,
getAllOrders,
getUserOrders
}