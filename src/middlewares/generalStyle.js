module.exports = (req,res,next) => {
    let path = req.url.split("/");
    let style = path[path.length-1];
    if(style.length > 1){
        res.locals.styles = ["reset",style];
    }else{
        res.locals.styles = ["reset","main"];
    }
    next();
}