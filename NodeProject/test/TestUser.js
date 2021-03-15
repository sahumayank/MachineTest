var check = require('../services/UserService');

function testdelete() {
    var user = {};
    user.id = 17;
   
  us = new check();
    us.delete(user.id,function (err,count) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(count)
    });
  }
//testdelete();  


function testadd() {
  var user = {};
  
 
        user.name = 'raj';
        user.email = 'sahu';
        user.address = 'abc@gmail.com';
        
 
console.log("hello");
us = new check();
  us.add(user,function (err,count) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(count)
  });
}
//testadd();



function testUpdate()
{
var user = {};
        user.name = 'Ankit';
        user.email = 'Pare';
        user.address = 'abc@gmail.com';
        user.id = 1;
        us = new check();
 us.update(user,function (err,count) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(count)
});
}
//testUpdate();



function testSearch(){
   
     var user = {};
     user.id = 12;
     us = new check();
     us.search()


}


testSearch();