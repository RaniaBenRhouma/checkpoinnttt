 loggedIn =(req, res, next)=> {
    var dateReq= Date();
  
    // Define FONCTION VERIFICATION
   const DateValidity = (dReq)=>{
  
    const checkHourValidity= (d)=>{
        var rep=true;
        var hours= parseInt(d.substr(16,17));
        if((hours>=9) && (hours<17)) {
           rep=true;
        } else { rep = false; }
        return rep;
    }
  
        var test=true;
        switch(dReq.substr(0,2)){
            case "Sat":
            case "Sun": test=false; break;
            default: 
            if (checkHourValidity (dReq)) { test = true} else { test = false }
        }
        return test ;
    
    
    
  };  //END FUNC DEFINITION
  
    if(DateValidity(dateReq)) {
      console.log('render resultat ', DateValidity(dateReq))
      next();
    } else {
      console.log ('404 not available' , DateValidity(dateReq))
      res.redirect('/404');
    }
  }
module.exports= loggedIn;