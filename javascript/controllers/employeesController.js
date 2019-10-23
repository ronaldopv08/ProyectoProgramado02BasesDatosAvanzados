const employees = require('../models/employees');

exports.createEmployees =  async (req, res) => {
    const employees = new employees(req.body);
    await employees.save((err, employees)=>{
        if(err) console.log(err);
        //res.redirect("/clients")
    })
}

exports.getEmployees = async (req, res) => {
    const employees = await employees.find();
    //res.render("AdminViews/clientsView", {clients});
}

exports.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await employees.deleteOne({_id : id }, (err)=>{
        if(err){
            console.log(err);
        } else{
            //res.redirect("/books");
        }
    });
}

exports.findEmployee = async (req,res)=>{
    const {id} = req.params;
    await employees.findById({_id : id}, (err, employees)=>{
        if (err){
            console.log(err);
        } else{
            //res.render("AdminViews/updateBookView", {book});
        }
    });
}

exports.updateEmployee = async (req, res) => {
    const { id } = req.params;
    await employees.update({_id : id}, req.body, (err, employees)=>{
        if(err) console.log(err);
        //res.redirect('/books')
    });
}