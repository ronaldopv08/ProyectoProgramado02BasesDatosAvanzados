const Clients = require('../models/Clients');

exports.createClients =  async (req, res) => {
    const client = new Clients(req.body);
    await client.save((err, client)=>{
        if(err) console.log(err);
        //res.redirect("/clients")
    })
}

exports.getClients = async (req, res) => {
    const clients = await Clients.find();
    //res.render("AdminViews/clientsView", {clients});
}

exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    await Clients.deleteOne({_id : id }, (err)=>{
        if(err){
            console.log(err);
        } else{
            //res.redirect("/books");
        }
    });
}

exports.findClient = async (req,res)=>{
    const {id} = req.params;
    await Clients.findById({_id : id}, (err, client)=>{
        if (err){
            console.log(err);
        } else{
            //res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updateClient = async (req, res) => {
    const { id } = req.params;
    await Client.update({_id : id}, req.body, (err, client)=>{
        if(err) console.log(err);
        //res.redirect('/books')
    });
}