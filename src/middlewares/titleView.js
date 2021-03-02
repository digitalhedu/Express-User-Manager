module.exports = (req,res,next) => {
    let path = req.url.split("/");
    let title = path[path.length-1];
    if(title.length > 1){
        res.locals.title = String(title).toUpperCase();
    }else{
        res.locals.title = "HOME";
    }
    next();
}