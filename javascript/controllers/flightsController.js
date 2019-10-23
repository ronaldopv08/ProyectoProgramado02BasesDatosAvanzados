const flights = require('../models/flights');

exports.createFlights =  async (req, res) => {
    const flights = new flights(req.body);
    await flights.save((err, flights)=>{
        if(err) console.log(err);
        //res.redirect("/clients")
    })
}

exports.getFlights = async (req, res) => {
    const flights = await flights.find();
    //res.render("AdminViews/clientsView", {clients});
}

exports.deleteFlight = async (req, res) => {
    const { id } = req.params;
    await flights.deleteOne({_id : id }, (err)=>{
        if(err){
            console.log(err);
        } else{
            //res.redirect("/books");
        }
    });
}

exports.findFlight = async (req,res)=>{
    const {id} = req.params;
    await flights.findById({_id : id}, (err, flights)=>{
        if (err){
            console.log(err);
        } else{
            //res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updateFlight = async (req, res) => {
    const { id } = req.params;
    await flights.update({_id : id}, req.body, (err, flights)=>{
        if(err) console.log(err);
        //res.redirect('/books')
    });
}