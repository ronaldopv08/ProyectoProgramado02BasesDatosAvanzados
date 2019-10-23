const airports = require('../models/airports');

exports.createAirport = async (req, res) => {
    const airport = new airports(req.body);
    await airport.save((err, airport)=>{
        if(err) console.log(err);
      //  res.redirect("/airports")
    })
}

exports.getAirports = async (req, res) => {
    const airports = await airports.find();
   // res.render("AdminViews/booksView", {airports});
}

exports.deleteAirport = async (req, res) => {
    const { id } = req.params;
    await airports.deleteOne({_id : id }, (err)=>{
        if(err){
            console.log(err);
        } else{
      //      res.redirect("/books");
        }
    });
}

exports.findAirport = async (req,res)=>{
    const {id} = req.params;
    await airports.findById({_id : id}, (err, airports)=>{
        if (err){
            console.log(err);
        } else{
           // res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updateAirport = async (req, res) => {
    const { id } = req.params;
    await airports.update({_id : id}, req.body, (err, airports)=>{
        if(err) console.log(err);
       // res.redirect('/books')
    })
}