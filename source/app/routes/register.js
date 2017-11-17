module.exports = (app,passport) => {

    app.get('/register', (req,res)=>{
        res.render('register',{
            message: req.flash('LoginMEssage')
        })
    })

};
