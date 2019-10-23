const Airports = require('../models/Airports');

exports.createAirport = async (req, res) => {
    const airport = new Airports(req.body);
    await airport.save((err, airport)=>{
        if(err) console.log(err);
        res.redirect("/airports")
    })
}

exports.getAirports = async (req, res) => {
    const airports = await Airports.find();
    res.render("AdminViews/booksView", {airports});
}

exports.deleteAirport = async (req, res) => {
    const { id } = req.params;
    await Airports.deleteOne({_id : id }, (err)=>{
        if(err){
            console.log(err);
        } else{
            res.redirect("/books");
        }
    });
}

exports.findAirport = async (req,res)=>{
    const {id} = req.params;
    await Airports.findById({_id : id}, (err, book)=>{
        if (err){
            console.log(err);
        } else{
            res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updateAirport = async (req, res) => {
    const { id } = req.params;
    await Airports.update({_id : id}, req.body, (err, book)=>{
        if(err) console.log(err);
        res.redirect('/books')
    })
}