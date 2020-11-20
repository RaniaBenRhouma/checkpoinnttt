express = require('express');
 const app =express();
loggerIn= require('./middleware');

// let loggedIn =(req, res, next)=> {
//   var dateReq= Date();

//   // Define FONCTION VERIFICATION
//  const DateValidity = (dReq)=>{

//   const checkHourValidity= (d)=>{
//       var rep=true;
//       var hours= parseInt(d.substr(16,17));
//       if((hours>=9) || (hours<17)) {
//          rep=true;
//       } else { rep = false; }
//       return rep;
//   }

//       var test=true;
//       switch(dReq.substr(0,2)){
//           case "Sat":
//           case "Sun": test=false; break;
//           default: 
//           if (checkHourValidity (dReq)) { test = true} else { test = false }
//       }
//       return test ;
  
  
  
// };  //END FUNC DEFINITION

//   if(!DateValidity(dateReq)) {
//     console.log('render resultat ', DateValidity(dateReq))
//     next();
//   } else {
//     console.log ('404 not available')
//     res.redirect('/404');
//   }
// }

const path = require('path');
const router = express.Router();

app.use(loggedIn);
app.use(express.static('public'));


router.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/public/home.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/services',function(req,res){
  res.sendFile(path.join(__dirname+'/public/services.html'));
});

router.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/public/contact.html'));
});

router.get('/404',function(req,res){
  res.sendFile(path.join(__dirname+'/public/unavailable.html'));
});

//add the router
app.use('/', router);


app.listen (5000);
