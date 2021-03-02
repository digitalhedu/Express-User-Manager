module.exports = (req,res,next) => {
    let user = req.session.user;
    if(user){
        res.locals.user = user;
    }else{
        res.locals.user = null;
    }
    next();
}