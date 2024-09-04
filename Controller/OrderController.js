const Orders = require('../model/Orders');

exports.Orders = async(req,res)=>{
    try{
        const Orders = await Orders.find();
        res.json(Orders);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};

exports.Ordersname = async (req, res) => {
    try {

        const Orders = await Orders.findById(req.params.id);

        if (!prodOrdersuct) return res.status(404).json({ message: 'Orders not found' });

        res.json(Orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addOrders = async(req,res)=>{
    const{customer_name,product,quantity,order_date,status}=req.body;
    const Orders = new Orders({customer_name,product,quantity,order_date,status });
    try{
        const newOrders = await Orders.save();
        res.status(201).json(newOrders);
    }catch(err){
        res.status(400).json({message: err.message })
    }
};

exports.updateOrders = async (req, res) => {
    try {
        const { std_icustomer_name, product, quantity, order_date, status} = req.body;
        
        const Orders = await Orders.findById(req.params.id);
        
        if (!Orders) {
            return res.status(404).json({ message: 'Orders not found' });
        }


        Orders.std_icustomer_name = std_icustomer_name || Orders.std_icustomer_name;
        Orders.product = product || Orders.product;
        Orders.quantity = quantity || Orders.quantity;
        Orders.order_date = order_date || Orders.order_date;
        Orders.status = status || Orders.status;

        const updateOrders = await Orders.save();

        res.json(updateOrders);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteOrders = async (req, res) => {
    try {
        const Orders = await Orders.findByIdAndDelete({customer_name});

        if (!Orders) return res.status(404).json({ message: 'Orders not found' });
        
        res.json({ message: 'Orders deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};








