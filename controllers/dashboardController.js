const dashboard_index = (req,res) =>{
    // Customer.find().sort({updatedAt: -1})
    //     .then((result) => {res.render('dashboard',{title :  'Customer',cust : result})})
    //     .catch((err) => console.log(err));
    
    res.render('dashboard',{title :  'Customer'})
    
}

module.exports = {dashboard_index}