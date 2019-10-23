const airlines = require('../models/airlines');

exports.createAirlines =  async (req, res) => {
    const airlines = new airlines(req.body);
    await airlines.save((err, airlines)=>{
        if(err) console.log(err);
        //res.redirect("/clients")
    })
}

exports.getAirlines = async (req, res) => {
    const airlines = await airlines.find();
    //res.render("AdminViews/clientsView", {clients});
}

exports.deleteAirline = async (req, res) => {
    const { id } = req.params;
    await airlines.deleteOne({_id : id }, (err)=>{
        if(err){
            console.log(err);
        } else{
            //res.redirect("/books");
        }
    });
}

exports.findAirline = async (req,res)=>{
    const {id} = req.params;
    await airlines.findById({_id : id}, (err, airlines)=>{
        if (err){
            console.log(err);
        } else{
            //res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updateAirline = async (req, res) => {
    const { id } = req.params;
    await airlines.update({_id : id}, req.body, (err, airlines)=>{
        if(err) console.log(err);
        //res.redirect('/books')
    });
}