const express = require('express');

const{Orders,Ordersname,addOrders,updateOrders,deleteOrders }
= require('../Controller/OrderController');

const router = express.Router();

router.get('/Orders', Orders);

router.get('/Ordersname', Ordersname);

router.post('/Orders', addOrders);

router.put('/updateOrders/:id', updateOrders);

router.delete('/deleteOrders/:id', deleteOrders);


module.exports = router;









