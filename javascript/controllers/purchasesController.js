const purchases = require('../models/purchases');

exports.createPurchases =  async (req, res) => {
    const purchases = new purchases(req.body);
    await purchases.save((err, purchases)=>{
        if(err) console.log(err);
        //res.redirect("/clients")
    })
}

exports.getPurchases = async (req, res) => {
    const purchases = await purchases.find();
    //res.render("AdminViews/clientsView", {clients});
}

exports.findPurchase = async (req,res)=>{
    const {id} = req.params;
    await purchases.findById({_id : id}, (err, purchases)=>{
        if (err){
            console.log(err);
        } else{
            //res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updatePurchase = async (req, res) => {
    const { id } = req.params;
    await purchases.update({_id : id}, req.body, (err, purchases)=>{
        if(err) console.log(err);
        //res.redirect('/books')
    });
}