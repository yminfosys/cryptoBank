$( document ).ready(function() {
    var allredyloginuserID=$("#allredyloginuserID").val();
    if(allredyloginuserID){
      logout();
      return;
      getUserprofile(allredyloginuserID);
     
        
    }else{
        loginClick();
    }
    ///////For Password Toggle/////////
    
    // const togglePassword = document.querySelector('#togglePassword');
    // const password = document.querySelector('#regPassword');
    // if(togglePassword && password ){
    //     togglePassword.addEventListener('click', function (e) {
    //         // toggle the type attribute
    //         const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    //         password.setAttribute('type', type);
    //         // toggle the eye slash icon
    //         this.classList.toggle('fa-eye-slash');
    //     });
    // }


 

  
})



// document.getElementById("formDeposit").addEventListener("click", function(event){
  
//   $.ajax( {
//           url: '/user/fundDeposit',
//           type: 'POST',
//           data: new FormData( this ),
//           processData: false,
//           contentType: false,
//           success: function(result){
//             console.log(result)
//               $("#offcanvasDeposit").html(' <div class="row">\
//                   <div  class="col">\
//                     <div class="card" style="">\
//                     <p>Deposit Request Submitted Successfully</br>Transaction ID : '+result.txnID+'</br>It will take Few Minuites</p>\
//                     </div>\
//                   </div>\
//                 </div>');
//           }
//       } );
// event.preventDefault()
// });



function loginClick(){

  //   $("#view").html('<div class="row mb-3">\
  //   <div style="text-align: center; margin-top: 15vh;" class="col">\
  //     <div style="font-size: 35px; font-weight:bold;">Log in</div>\
  //     <span>Fill the form to log in</span>\
  //   </div>\
  // </div>\
  // <div class="card mb-3" style="background-color: #ccdbe6;">\
  //   <div class="card-body">\
  //     <div class="mb-3">\
  //       <label for="loginEmail" class="form-label">Email address</label>\
  //       <input style=" text-decoration: none;"  type="email" class="form-control" id="loginEmail" aria-describedby="emailHelp">\
  //     </div>\
  //     <div class="mb-3">\
  //       <label for="loginPassword" class="form-label ">Password</label>\
  //       <input type="password" class="form-control" id="loginPassword">\
  //     </div>\
  //   </div>\
  // </div>\
  // <p onclick="regClick()" class="float-start">Register</p>\
  // <p onclick="forgetpassword()" class="float-end">Forget Password</p>\
  // <div class="fixed-bottom">\
  //     <div class="container-fluid mb-3">\
  //       <div id="loginBtn" class="d-grid gap-2">\
  //         <button onclick="loginProcess()" class="btn btn-primary " type="button">Login</button>\
  //       </div>\
  //     </div>\
  // </div>');

  $("#view").html(`<!-- System Update Card -->
<div class="card text-white bg-warning mb-3" style="max-width: 100%; position: fixed; top: 0; left: 0; right: 0; z-index: 1050;">
  <div class="card-body text-center">
    <h5 class="card-title">System Update</h5>
    <p class="card-text">Our system is being updated for better performance. Please bear with us.</p>
    <button class="btn btn-dark" onclick="document.getElementById('updateCard').style.display='none'">OK</button>
  </div>
</div>`)


}

function regClick(){
    $("#view").html('<p onclick="loginClick()" class="mt-2 float-end">Login</p>\
    <div class="row mb-3">\
      <div style="text-align: center; margin-top: 15vh;" class="col">\
        <div style="font-size: 35px; font-weight:bold;">Register Now</div>\
        <span>Create an account</span>\
      </div>\
    </div>\
    <div class="card" style="background-color: #ccdbe6;">\
      <div class="card-body">\
        <div class="mb-3">\
          <label for="exampleInputEmail1" class="form-label">Email address</label>\
          <input style=" text-decoration: none;"  type="email" class="form-control" id="email" aria-describedby="emailHelp">\
\
        <div class="mb-3">\
          <label for="exampleInputEmail1" class="form-label">Mobile Number</label>\
          <div id="mobileGroup" class="input-group mb-3">\
          <span onclick="changeCountry()" class="input-group-text" id="basic-addon1">+91  <i style="font-size: xx-small;" class="fa fa-chevron-down" aria-hidden="true"></i></span>\
            <input type="number" class="form-control" id="mobileNo">\
            <input type="hidden" id="countryCode" value="+91" class="form-control">\
            <input type="hidden" id="currency" value="INR" class="form-control">\
            <input type="hidden" id="currencySymbol" value="&#8377" class="form-control">\
            <input type="hidden" id="country" value="India" class="form-control">\
          </div>\
          <ul id="countryList" style="display: none; height: 20vh; overflow-y: auto;" class="list-group">\
        </ul>\
        </div>\
\
        <div class="mb-3">\
          <label for="exampleInputPassword1" class="form-label">Password</label>\
          <input type="password" class="form-control" id="password">\
        </div>\
        \
      </div>\
    </div>\
      <div class="fixed-bottom">\
        <div class="container-fluid mb-3">\
          <div id="registerBtn" class="d-grid gap-2">\
            <button onclick="newRegister()" class="btn btn-primary " type="button">Register</button>\
          </div>\
        </div>\
    </div>');
}


function changeCountry(){
  $.post('/user/getCountryList',{},function(data){
    if(data){
      $("#countryList").css({"display":"block"});
      $("#countryList").html('');
      data.forEach(val => {
        $("#countryList").append('<li onclick="setList(\''+val.country+'\',\''+val.countryCode+'\',\''+val.currency+'\',\''+val.currencySymbol+'\')" class="list-group-item">'+val.country+', '+val.countryCode+'</li>');
      });
    }
})
}

function setList(country,countryCode,currency,currencySymbol){
  $("#countryList").css({"display":"none"});
  $("#mobileGroup").html('<span onclick="changeCountry()" class="input-group-text" id="basic-addon1">'+countryCode+'  <i style="font-size: xx-small;" class="fa fa-chevron-down" aria-hidden="true"></i></span>\
  <input type="number" id="mobileNo" class="form-control">\
  <input type="hidden" id="countryCode" value="'+countryCode+'" class="form-control">\
  <input type="hidden" id="currency" value="'+currency+'" class="form-control">\
  <input type="hidden" id="currencySymbol" value="'+currencySymbol+'" class="form-control">\
  <input type="hidden" id="country" value="'+country+'" class="form-control">');
}


function newRegister(){
  var email=$("#email").val().replace(/\s/g, '');
  var mobileNo=$("#mobileNo").val().trim();
  var country=$("#country").val().trim();
  var countryCode=$("#countryCode").val().trim();
  var currency=$("#currency").val().trim();
  var currencySymbol=$("#currencySymbol").val().trim();
  var password=$("#password").val();

  

  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    if (reg.test(email) == false) 
        {
            alert('Invalid Email Address');
            $("#email").focus();
            return 
        }
        

        if(mobileNo.length != 10){
          alert('Enter Valid Mobile Number');
          $("#mobileNo").focus()
          return
       }

        if(password.length < 8){
          alert('Password Must be 8 to 18 charecter Capital, small, spacial charc');
          $("#password").focus()
          return
      } 

      $("#registerBtn").attr('disabled','disabled');
      
      ////////Check Exist user///////
      $.post('/user/checkExistuser',{mobileNo:mobileNo,email:email},function(data){
        if(!data){
            //////Register///////////////
            $.post('/user/newregister',{
              email: email,
              mobileNo:mobileNo,
              country:country,
              countryCode:countryCode,
              currency:currency,
              currencySymbol:currencySymbol,
              password:password
            },function(data){
              
              if(data){
                alert("Registration Success")
                 location.replace("/user");
              }else{
                alert("Technical Error Try Again")
              }
          })
           
            }else{
              alert("You Id / Number is register with us")
            }
        })


     


}


function forgetpassword(){
  var loginEmail=$("#loginEmail").val().replace(/\s/g, '');
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
  if (reg.test(loginEmail) == false) 
      {
          alert('Invalid Email Address');
          $("#loginEmail").focus();
          return 
      }
     var newPasw = prompt("Enter New Password");

     if(newPasw.length < 6){
          alert('Password Must be 6 to 18 charecter');
          return
          
      } 
      $.post('/user/newPasswordRequest',{loginEmail:loginEmail,newPasw:newPasw},function(data){
          if(data){
              alert("Your Request to set New Password is successfully send to Admin Our executive call you soon" )
          }else{
              alert("User Id Not Match / Allredy has pending Request");
          }
      })


  
}

function logout(){
    $.post('/user/logout',{},function(data){
        if(data){
            location.replace("/user");
           
        }
    })

  }

 

  function loginProcess(){
    //protectButton('loginBtn');
    var loginEmail=$("#loginEmail").val().replace(/\s/g, '');
    var loginPassword=$("#loginPassword").val().trim();

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
      if (reg.test(loginEmail) == false) 
          {
              alert('Invalid Email Address');
              $("#loginEmail").focus();
              return 
          }
          if(loginPassword < 6){
            alert('Password Must be 6 to 18 charecter');
            $("#loginPassword").focus()
            return
        } 

        $.post('/user/loginUser',{loginPassword:loginPassword,loginEmail:loginEmail},function(user){
            if(user){
                location.replace("/user");
            }else{
                alert("Worng Credential")
            }
        })

  }

 async function getUserprofile(userID){
  
  $("#waitingPage").css({"display":"block"});
    $("#topnav").css({"display":"block"});
    $("#topBacground").css({"display":"block"});
    $("#footnav").css({"display":"block"});
    $("#topnav").html('<div class="container-fluid">\
      <a> <span style="background-color: #ccdbe6; " class="navbar-toggler-icon" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></span></a>\
      <a class="navbar-brand" href="#"><img src="/images/logo/logo.png" alt="Logo" width="120" height="40" class="d-inline-block align-text-top"> </a>\
      <a>\
        <i class="fa fa-bell" aria-hidden="true"></i>\
      </a>\
    </div>\
    \
    <div style="background-color: #3a5c74; color: antiquewhite; width: 90% !important;"  class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">\
      <div class="offcanvas-header">\
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Profile</h5>\
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>\
      </div>\
      <div id="profileOffcanvas" class="offcanvas-body">\
        <div>\
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.\
        </div>\
        <div class="dropdown mt-3">\
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">\
            Dropdown button\
          </button>\
          <ul class="dropdown-menu">\
            <li onclick="logout()"><a class="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close" href="#">Logout</a></li>\
            <li><a class="dropdown-item" href="#">Another action</a></li>\
            <li><a class="dropdown-item" href="#"  data-bs-dismiss="offcanvas" aria-label="Close">Something else here</a></li>\
          </ul>\
        </div>\
      </div>\
    </div>');
    
    $("#topBacground").css({"display":"block"});

    $("#view").html('<div style="margin-top: -15vh; background-color: rgb(78, 83, 83); color: antiquewhite;" class="card mb-3">\
        <div id="accounrBalance" class="card-header">\
        </div>\
        <div class="card-body">\
          <div class="row">\
            <div class="col" style="text-align: center;">\
              <button onclick="withdralInt('+userID+')" type="button" class="btn btn-danger"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>\
              <br><span style="font-size:xx-small;" >Withdraw</span>\
            </div>\
            <div class="col"  style="text-align: center;" >\
              <button onclick="sendMoneylInt('+userID+')" type="button" class="btn btn-info"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>\
              <br><span style="font-size:xx-small;" >Send</span>\
            </div>\
            <div class="col" style="text-align: center;">\
              <button onclick="scanInit('+userID+')" type="button" class="btn btn-success"><i class="fa fa-qrcode" aria-hidden="true"></i></button>\
              <br><span id="q12" style="font-size:xx-small;" >Scan</span>\
            </div>\
            <div class="col" style="text-align: center;">\
              <button onclick="currencyConvert('+userID+')" type="button" class="btn btn-primary"><i class="fa fa-exchange" aria-hidden="true"></i></button>\
              <br><span style="font-size:xx-small;" >Convert</span>\
            </div>\
          </div>\
        </div>\
      </div>\
      \
    <div style="height: 70vh !important;" class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">\
  <div class="offcanvas-header">\
    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Add Fund</h5>\
    <button type="button" onclick="closeoffcanvasBottom('+userID+')" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>\
  </div>\
    <div id="offcanvasDeposit" class="offcanvas-body small">\
    </div>\
  </div>\
\
<div class="mb-3" >\
  <div id="multiCurrency" class="row">\
  </div>\
</div>\
<ol id="last10Transaction" style="margin-bottom: 8vh;" class="list-group list-group-numbered list-group-item-dark">\
</ol>')

multiCurrency(userID)
}


function multiCurrency(userID){
  $.post('/user/updateMultiCurrencyBalance',{userID:userID},function(multicurrency){
      if(multicurrency.length > 0 ){
        //console.log(multicurrency)
        multicurrency.forEach(val => {
         // console.log(val)
          $("#multiCurrency").append('<div class="col">\
            <div style="background-color: #041b2b; color: #ccdbe6;" class="card">\
              <div class="card-body">\
                <h5 class="card-title">'+val.currency+'</h5>\
                <p class="card-text">'+val.currencySymbol+' '+Number(val.lastcheckBalance).toFixed(2)+'</p>\
              </div>\
            </div>\
          </div>'); 
        });
        

      profile(userID,multicurrency);
      }
    });
  

  
}

  

  function profile(userID,multicurrency){
    
    $.post('/user/getUser',{userID:userID},function(user){
      if(user){
        var aa={};
        multicurrency.forEach(val => {
          if(val.userID==user.userID && val.currency==user.currency){
            aa={fait:val.lastcheckBalance,usdt:val.lastCheckUsdtAmount,cSymbol:val.currencySymbol}
          }
        });
     //console.log(aa);  getUserprofile()
       
        //usdtBalance:String,
        $("#accounrBalance").html('<div  class="row">\
            <div class="col">\
              <p>Balance</p>\
              <p style="font-size: 20px; font-weight:bold;">'+aa.cSymbol+' '+Number(aa.fait).toFixed(2)+' &nbsp; &nbsp; <i onclick="getUserprofile('+userID+')" class="fa fa-refresh" aria-hidden="true"></i><br/><span style="font-size:small;">&#8771; '+Number(aa.usdt).toFixed(2)+' USDT</p>\
            </div>\
            <div class="col">\
              <button type="button" class="btn btn-dark float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">+</button>\
            </div>\
        </div>');
        var verifyStatus="inReview"
        if(user.varyficatinStatus=="Verified"){
          verifyStatus='<span style="color: green;"><strong>Verified</strong></span>'
        }else{
          if(user.varyficatinStatus=="NotVerify"){
            verifyStatus='<span onclick="verifyNowinit(\''+userID+'\')" data-bs-dismiss="offcanvas" style="color: red;"><strong>Verify now</strong></span>'
          }
        }

        $("#profileOffcanvas").html('<div class="accordion" id="accordionExample">\
        <div class="accordion-item">\
          <h2 class="accordion-header">\
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">\
              '+user.userName+' &nbsp; &nbsp; '+verifyStatus+'\
            </button>\
          </h2>\
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">\
            <div class="accordion-body">\
              <ul class="list-group">\
                <li onclick="copyContent('+user.accountNumber+')" class="list-group-item">\
                  <span>Account no:</span>\
                  <i class="fa fa-clone float-end" aria-hidden="true"></i>\
                  <p class="mt-2">'+user.accountNumber+'</p>\
                </li>\
                <li class="list-group-item">\
                  <span>Account Type:</span>\
                  <p class="mt-2">Crypto</p>\
                  <div id="qrcode"></div>\
                  <div onclick="shareQRCode('+user.accountNumber+')" class="share-btn" ><i style="font-size: large;" class="fa fa-share-alt" aria-hidden="true"></i></div>\
                </li>\
              </ul>\
            </div>\
          </div>\
        </div>\
        <ul class="list-group mt-3">\
        <li class="list-group-item" onclick="setResetTpin('+userID+')"  data-bs-dismiss="offcanvas" aria-label="Close">Set / Re-set T-Pin</li>\
        <li class="list-group-item" onclick="paymethodInit('+userID+')"  data-bs-dismiss="offcanvas" aria-label="Close">Add Payment Method</li>\
        <li class="list-group-item" onclick="orderDetails('+userID+')"  data-bs-dismiss="offcanvas" aria-label="Close">Order</li>\
        <li class="list-group-item" onclick="merchantInit('+userID+')"  data-bs-dismiss="offcanvas" aria-label="Close">Merchant</li>\
        <li class="list-group-item" onclick="grievanceInit('+userID+')"  data-bs-dismiss="offcanvas" aria-label="Close">File a complaint</li>\
        <li class="list-group-item" onclick="logout()"  data-bs-dismiss="offcanvas" aria-label="Close">Logout</li>\
        </ul>\
        </div>')

        

        $.post('/user/getDiposit',{},function(diposit){
          if(diposit){
            $("#offcanvasDeposit").html('<div class="row">\
           <div class="accordion accordion-flush" id="accordionFlushExample">\
              <div class="accordion-item">\
                <h2 class="accordion-header">\
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">\
                    Deposit By USDT\
                  </button>\
                </h2>\
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">\
                  <div class="accordion-body">\
                  \
                  <div class="col">\
              <div class="card" style="">\
                <img style="width: 50%; margin-left: 25%;" src="'+diposit.qrCode+'" class="card-img-top" alt="QRCODE">\
                <div class="card-body">\
                  <div class="row">\
                    <div  class="col-10">\
                      <span>Network ></span>\
                      <p>BNB Smart Chain (BEP20)</p>\
                    </div>\
                    <div  class="col ">\
                      <i class="fa fa-exchange" aria-hidden="true"></i>\
                    </div>\
                  </div>\
                  <div class="row">\
                    <div  class="col-10">\
                      <span>Deposit Address ></span>\
                      <p>'+diposit.virtualAddress+'</p>\
                    </div>\
                    <div onclick="copyContent(\''+diposit.virtualAddress+'\')" class="col ">\
                      <i class="fa fa-clone" aria-hidden="true"></i>\
                    </div>\
                  </div>\
                  <form id="formDeposit" onsubmit="depositSubmit()" action="/user/fundDeposit"  enctype="multipart/form-data" method="post">\
                      <div class="mb-3">\
                        <label for="exampleInputText1" class="form-label">Transaction ID:</label>\
                        <input type="text" class="form-control" name="transactionid" aria-describedby="textHelp">\
                      </div>\
                      <div class="mb-3">\
                        <label for="exampleInputText1" class="form-label">Deposit USDT Amount: </label>\
                        <input type="text" class="form-control" name="depositAmount" aria-describedby="textHelp">\
                      </div>\
                      <div class="mb-3">\
                        <label for="formFile" class="form-label">Upload Trasactin screen sort:</label>\
                        <input class="form-control" type="file"  name="fundDepositScrn">\
                      </div>\
                      <input type="hidden" name="userID" value="'+userID+'"/>\
                      <div id="fundButton" class="d-grid gap-2">\
                        <button class="btn btn-primary" type="submit">Submit</button>\
                      </div>\
                    </form>\
                </div>\
              </div>\
            </div>\
                  \
                  </div>\
                </div>\
              </div>\
              <div class="accordion-item">\
                <h2 class="accordion-header">\
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">\
                    Deposit By Merchant\
                  </button>\
                </h2>\
                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">\
                  <div class="accordion-body">\
                  <ul class="list-group">\
                    <li class="list-group-item" onclick="bankMerchent('+userID+')">Bank Merchant</li>\
                    <li class="list-group-item" onclick="abcd('+userID+')">Cash Merchant</li>\
                </ul>\
                  </div>\
                </div>\
              </div>\
            </div>\
            </div>');
            transectonList(userID);
            footer(userID);
            qrcode(user.accountNumber);
          }
        });
       }
      })
      
  }

  
  

            //  <div class="col">\
            //   <div class="card" style="">\
            //     <img style="width: 50%; margin-left: 25%;" src="'+diposit.qrCode+'" class="card-img-top" alt="QRCODE">\
            //     <div class="card-body">\
            //       <div class="row">\
            //         <div  class="col-10">\
            //           <span>Network ></span>\
            //           <p>BNB Smart Chain (BEP20)</p>\
            //         </div>\
            //         <div  class="col ">\
            //           <i class="fa fa-exchange" aria-hidden="true"></i>\
            //         </div>\
            //       </div>\
            //       <div class="row">\
            //         <div  class="col-10">\
            //           <span>Deposit Address ></span>\
            //           <p>'+diposit.virtualAddress+'</p>\
            //         </div>\
            //         <div onclick="copyContent(\''+diposit.virtualAddress+'\')" class="col ">\
            //           <i class="fa fa-clone" aria-hidden="true"></i>\
            //         </div>\
            //       </div>\
            //       <form id="formDeposit" onsubmit="depositSubmit()" action="/user/fundDeposit"  enctype="multipart/form-data" method="post">\
            //           <div class="mb-3">\
            //             <label for="exampleInputText1" class="form-label">Transaction ID:</label>\
            //             <input type="text" class="form-control" name="transactionid" aria-describedby="textHelp">\
            //           </div>\
            //           <div class="mb-3">\
            //             <label for="exampleInputText1" class="form-label">Deposit USDT Amount: </label>\
            //             <input type="text" class="form-control" name="depositAmount" aria-describedby="textHelp">\
            //           </div>\
            //           <div class="mb-3">\
            //             <label for="formFile" class="form-label">Upload Trasactin screen sort:</label>\
            //             <input class="form-control" type="file"  name="fundDepositScrn">\
            //           </div>\
            //           <input type="hidden" name="userID" value="'+userID+'"/>\
            //           <div id="fundButton" class="d-grid gap-2">\
            //             <button class="btn btn-primary" type="submit">Submit</button>\
            //           </div>\
            //         </form>\
            //     </div>\
            //   </div>\
            // </div>\

  function bankMerchent(id){
   // alert(id)
    //$("#offcanvasBottom").css({"background-color" : "#000000 !important"})
    $('#offcanvasBottom').attr('style', 'height: 90vh !important');
    $("#offcanvasDeposit").html('<ul  class="list-group">\
      <li id="" class="list-group-item mb-3" style="height: 17vh; background-color: rgb(50, 63, 63); border: none;">\
        <p style="font-size: small; color: #797575 !important;" class="text-dark">\
          <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
          <span style="font-size: larger; color: #fffbfb;"> Sukanta sardar </span> &nbsp;\
          <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
          <br><span style="font-size: larger; color: #fffbfb;"> Post Code : 700126 </span> &nbsp; \
          <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
          <span><i class="fa fa-clock-o" aria-hidden="true"></i> 15 min</span>\
          <span class="float-end">Cash Collections</span>\
          <br><span style="font-size: medium; color:rgb(141, 119, 119);">0.2 %</span>\
          <span class="float-end" > <button onclick="marchantOrdrtInit()" type="button" class="btn btn-sm btn-success">Buy</button></span>\
          <br> Limit <span style="color: #fffbfb;">&#8377;2000.00 - &#8377;100000.00</span>\
          <input type="hidden" id="userID" value="1">\
        </p>\
        <div id="marchantID" style="color: #fffbfb; display: none;" >\
          <span>Available Balance : &#8377; 120000</span>\
          <div class="row">\
            <label for="exampleInputText1" class="form-label">Amount</label>\
            <div class="col">\
              <input  type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp">\
            </div>\
            <div class="col">\
              <button onclick="createMarchantOrder()" type="button" class="btn btn-sm btn-success float-end">Send</button>\
            </div>\
          </div>\
        </div>\
      </li>\
    </ul>');
  }           

  function abcd(id){
    $('#offcanvasBottom').attr('style', 'height: 90vh !important');
    $("#offcanvasDeposit").html('<ul  class="list-group">\
      <li id="" class="list-group-item mb-3" style="height: 17vh; background-color: rgb(50, 63, 63); border: none;">\
        <p style="font-size: small; color: #797575 !important;" class="text-dark">\
          <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
          <span style="font-size: larger; color: #fffbfb;"> Sukanta sardar </span> &nbsp;\
          <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
          <br><span style="font-size: larger; color: #fffbfb;"> Post Code : 700126 </span> &nbsp; \
          <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
          <span><i class="fa fa-clock-o" aria-hidden="true"></i> 15 min</span>\
          <span class="float-end">Cash Collections</span>\
          <br><span style="font-size: medium; color:rgb(141, 119, 119);">0.2 %</span>\
          <span class="float-end" > <button onclick="marchantOrdrtInit()" type="button" class="btn btn-sm btn-success">Buy</button></span>\
          <br> Limit <span style="color: #fffbfb;">&#8377;2000.00 - &#8377;100000.00</span>\
          <input type="hidden" id="userID" value="1">\
        </p>\
        <div id="marchantID" style="color: #fffbfb; display: none;" >\
          <span>Available Balance : &#8377; 120000</span>\
          <div class="row">\
            <label for="exampleInputText1" class="form-label">Amount</label>\
            <div class="col">\
              <input  type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp">\
            </div>\
            <div class="col">\
              <button onclick="createMarchantOrder()" type="button" class="btn btn-sm btn-success float-end">Send</button>\
            </div>\
          </div>\
        </div>\
      </li>\
    </ul>');
  }  
  
 function closeoffcanvasBottom(userID){
  $('#offcanvasBottom').attr('style', 'height: 70vh !important');
  $.post('/user/getDiposit',{},function(diposit){
    if(diposit){
      $("#offcanvasDeposit").html('<div class="row">\
     <div class="accordion accordion-flush" id="accordionFlushExample">\
        <div class="accordion-item">\
          <h2 class="accordion-header">\
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">\
              Deposit By USDT\
            </button>\
          </h2>\
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">\
            <div class="accordion-body">\
            \
            <div class="col">\
        <div class="card" style="">\
          <img style="width: 50%; margin-left: 25%;" src="'+diposit.qrCode+'" class="card-img-top" alt="QRCODE">\
          <div class="card-body">\
            <div class="row">\
              <div  class="col-10">\
                <span>Network ></span>\
                <p>BNB Smart Chain (BEP20)</p>\
              </div>\
              <div  class="col ">\
                <i class="fa fa-exchange" aria-hidden="true"></i>\
              </div>\
            </div>\
            <div class="row">\
              <div  class="col-10">\
                <span>Deposit Address ></span>\
                <p>'+diposit.virtualAddress+'</p>\
              </div>\
              <div onclick="copyContent(\''+diposit.virtualAddress+'\')" class="col ">\
                <i class="fa fa-clone" aria-hidden="true"></i>\
              </div>\
            </div>\
            <form id="formDeposit" onsubmit="depositSubmit()" action="/user/fundDeposit"  enctype="multipart/form-data" method="post">\
                <div class="mb-3">\
                  <label for="exampleInputText1" class="form-label">Transaction ID:</label>\
                  <input type="text" class="form-control" name="transactionid" aria-describedby="textHelp">\
                </div>\
                <div class="mb-3">\
                  <label for="exampleInputText1" class="form-label">Deposit USDT Amount: </label>\
                  <input type="text" class="form-control" name="depositAmount" aria-describedby="textHelp">\
                </div>\
                <div class="mb-3">\
                  <label for="formFile" class="form-label">Upload Trasactin screen sort:</label>\
                  <input class="form-control" type="file"  name="fundDepositScrn">\
                </div>\
                <input type="hidden" name="userID" value="'+userID+'"/>\
                <div id="fundButton" class="d-grid gap-2">\
                  <button class="btn btn-primary" type="submit">Submit</button>\
                </div>\
              </form>\
          </div>\
        </div>\
      </div>\
            \
            </div>\
          </div>\
        </div>\
        <div class="accordion-item">\
          <h2 class="accordion-header">\
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">\
              Deposit By Merchant\
            </button>\
          </h2>\
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">\
            <div class="accordion-body">\
            <ul class="list-group">\
              <li class="list-group-item" onclick="bankMerchent('+userID+')">Bank Merchant</li>\
              <li class="list-group-item" onclick="abcd('+userID+')">Cash Merchant</li>\
          </ul>\
            </div>\
          </div>\
        </div>\
      </div>\
      </div>');
    }
  });
  }

  function transectonList(userID){
    $("#last10Transaction").html('');
    $.post('/user/transactionMiniStatement',{userID:userID},function(trns){
      $("#waitingPage").css({"display":"none"});
      if(trns.length > 0){
        trns.forEach(val => {
          var amt=0
          if(val.transactionType=="Deposit"){
            amt=val.depositFaitAmount;
          }else{
            amt=val.withdralFaitAmount;
          }

          $("#last10Transaction").append('<li onclick="transactionDetails(\''+val.trasactionID+'\',\''+userID+'\')" class="list-group-item d-flex justify-content-between align-items-start mb-2">\
            <div class="ms-2 me-auto">\
              <div class="fw-bold">'+val.transactionType+'</div>\
              Txtd:'+val.trasactionID+'<br>Date: '+dateFormat(new Date(val.date),"dt")+'\
            </div>\
            <span class="badge text-bg-primary rounded-pill">'+val.fiatCurrency+' '+Number(amt).toFixed(2)+'</span>\
            </li>');
        });
        
      }else{
        $("#last10Transaction").append('<li class="list-group-item d-flex justify-content-between align-items-start mb-2">\
        <div class="ms-2 me-auto">\
          <div class="fw-bold">No Transaction </div>\
        </div>\
        </li>');
      }
    })
   
    
  }

  function transactionDetails(trasactionID,userID){

    $.post('/user/getTransactionsDetails',{ userID:userID, trasactionID:trasactionID},function(data){
     // console.log(data)
      if(!data.TransacFee){
        $("#topBacground").css({"display":"none"});
      $("#view").html('<div class="card" style="margin-top: 8vh; margin-bottom: 8vh; overflow-y: auto; ">\
      <div class="card-body">\
        <div  class="card-header text-center mb-3">\
          <span class="mb-2 p-2">To '+data.to+'</span>\
          <p style="font-size: 30px;">'+data.symbol+' '+Number(data.amount).toFixed(2)+'</p>\
          <span style="border-radius: 10px; border: 1px solid #041b2b; color: #d9e3db; background-color: #0c892b;" class="p-2 h6 ">Fast Transfer</span>\
         </div>\
        <ul  class="list-group">\
          <li class="list-group-item mb-3 p-3 bg-success active" aria-current="true">\
             <span style="font-size: medium;" class="badge float-end">'+data.status+'</span>\
            Status\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.toAccount+'</span>\
            To Account No\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+dateFormat(new Date(data.date),"dt")+'</span>\
            Date\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.referance+'</span>\
            Referance\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.txid+'</span>\
            Transaction ID\
          </li>\
          <li class="list-group-item mb-3 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.symbol+' '+Number(data.fee).toFixed(2)+'</span>\
            Fee\
          </li>\
          <li class="list-group-item mb-3 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.fromAccount+'</span>\
            From Account No\
          </li>\
          <li class="list-group-item mb-3 p-3">\
            <button onclick="getUserprofile('+userID+')" type="button" class="btn btn-success">Done</button>\
          </li>\
        </ul>\
      </div>\
    </div>')

   

      }else{
        alert('This Are the Fee Of TrxnID : '+trasactionID+'')
      }
    })

    
  }


  function dateFormat(date,frmat){  
    var year=date.getFullYear();  
    var month=date.getMonth() + 1; 
    var day=date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    if(frmat=="d"){
      return ''+day+'-'+month+'-'+year+''
    }else{
      return ''+day+'-'+month+'-'+year+' '+hours+':'+minutes+''
    }
  }
//console.log(dateFormat(new Date(),"dt"))

  function withdralInt(userID){
    $("#topBacground").css({"display":"none"});
    $("#view").html('<div class="card" style="height: 80vh; margin-top: 10vh; background-color: rgb(78, 83, 83); color: antiquewhite; margin-bottom: 10vh; overflow: auto;">\
    <div class="card-header">\
      <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
      <p class="h1">Withdrawal</p>\
    </div>\
    <div id="withdralTotalBody"  class="card-body">\
    <div class="mb-1 p-3">\
      <label for="formFile" class="form-label">Currency</label>\
      <select id="withdrawlMyCurrency" onchange="changeWithdralCurrency(this.value)"  class="form-select" aria-label="Default select example">\
        <option value="INR">Select Currency</option>\
      </select>\
      <ul id="withdrawalCurrencydetails" class="list-group mt-3">\
        \
      </ul>\
    </div>\
    <div id="withdrawlChannel" style="display:none;" class="mb-1 p-3">\
      <label for="formFile" class="form-label">Select Withdral Channel</label>\
      <select onchange="selectWithdral(this.value,'+userID+')"  class="form-select" aria-label="Default select example">\
        <option selected>Select Option</option>\
        <option value="1">Through Crypto Wallet</option>\
        <option value="2">To Bank Account</option>\
        <option value="3">Cash Collection</option>\
      </select>\
    </div>\
    <div id="withdralBody"  class="card-body">\
    </div>\
    </div>\
   </div>');
   getWidthrawlMycurrency(userID)
  }

  function getWidthrawlMycurrency(userID){
    $("#withdrawlMyCurrency").html('<option value="">Select Currency</option>')
      $.post('/user/senderGetMycurrency',{userID:userID},function(currency){
      if(currency.length > 0 ){
        currency.forEach(val => {
          if(val.frzeeFiatAmount && val.frzeeUsdtAmount){
            var selectValue=''+val.currency+','+val.currencySymbol+','+val.lastcheckBalance+','+val.lastCheckUsdtAmount+','+val.frzeeFiatAmount+','+val.frzeeUsdtAmount+''
          }else{
            var selectValue=''+val.currency+','+val.currencySymbol+','+val.lastcheckBalance+','+val.lastCheckUsdtAmount+',0,0'
          }
          
          $("#withdrawlMyCurrency").append('<option value="'+selectValue+'">'+val.currency+'</option>');
        });
        }
      });
  }

  function changeWithdralCurrency(currency){
    var currency=currency.split(",");
    $("#withdrawlChannel").css({"display":"block"});
     $("#withdrawalCurrencydetails").html('<li class="list-group-item active  bg-gradient" aria-current="true">\
      <span style="font-size: large;" class="badge bg-secondary float-end">USDT '+(Number(currency[3]) - (Number(currency[5]))).toFixed(2)+'</span>\
      '+currency[1]+' '+(Number(currency[2]) - Number(currency[4])).toFixed(2)+'\
      <input id="myCurrency" type="hidden" value="'+currency[0]+'">\
      <input id="myBalance" type="hidden" value="'+currency[2]+'">\
      <input id="myUsdtBalance" type="hidden" value="'+(Number(currency[3]) - (Number(currency[5])))+'"></input>\
      </li>')
  }

  function selectWithdral(val,userID){
    var myCurrency=$("#myCurrency").val();
    var myBalance=$("#myBalance").val();
    var myUsdtBalance=$("#myUsdtBalance").val();
   
    switch (val) {
      case "1":
       $("#withdralBody").html('<div class="mb-3">\
          <label for="exampleInputText1" class="form-label">USDT Token Address</label>\
          <input type="text" class="form-control" id="usdtTokenAddress" aria-describedby="textHelp">\
          <div id="textHelp" class="text">BEP-20 Network Chennel</div>\
          </div>\
          <div class="mb-3">\
            <label for="exampleInputText1" class="form-label">USDT</label>\
            <input type="text" class="form-control" id="UsdtWithdrawl" aria-describedby="textHelp">\
          </div>\
          <div class="mb-3">\
          <label style="width: 50%; margin-left: 25%;" class="form-label text-center">T-Pin</label>\
          <input id="txnPin" type="text" class="form-control text-center" style="width: 50%; margin-left: 25%;">\
          </div>\
          <div class="d-grid gap-2">\
            <button onclick="withdrawlCrypto('+userID+')" class="btn btn-primary" type="button">Submit</button>\
          </div>')
        break;

        case "2":

          $("#topBacground").css({"display":"none"});
          $("#view").html('<div style="background-color: rgb(50, 63, 63); color: #f1de0b; margin-top: 10vh;" class="card">\
          <div class="card-header">\
            <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
           Bank Marchant List\
          </div>\
          <div class="card-body " style="height: 80vh; margin-bottom: 10vh; overflow-y: auto;">\
            <ul id="bankMerchantList" class="list-group">\
            </ul>\
          </div>\
        </div>')
        

        $.post('/user/getBankMerchant',{myCurrency:myCurrency,userID:userID},function(data){
          //console.log(data)
          if(data.user.length >0){
            data.user.forEach(val => {
              if(data.usdt.length >0){
                data.usdt.forEach(usdtval => {
                  if( usdtval.currency == val.currency){
                    ///////Limit conntrol///////
                    var limitfrom=val.limitFrom;
                    var limitto =val.limitTo;
                    var total = val.totalFund;
                    var proscced=0;
                   // console.log("limitFrom",limitfrom, "limitTo",limitto,"myCurrency", myCurrency)
                    if(Number(val.totalFund) > Number(val.limitFrom)){
                      if(Number(val.totalFund) > Number(val.limitTo)){
                        proscced=1;
                       // console.log("ok")
                      }else{
                        limitto = total;
                       // console.log("okoo")
                        proscced=1;
                      }
                    }

                    ////////user Balance////////
                    var mybalance=myBalance
                    if(Number(myBalance) > Number(total)){
                      mybalance =total;
                    }


                    if(proscced ==1){

                      if(data.payMethod){
                        var usdtCurrencyRate = (Number(val.usdtRate)/Number(usdtval.usdtRate)).toFixed(2);
                        
                      $("#bankMerchantList").append('<li id="marh'+val.merchantuserID+'" class="list-group-item mb-3" style="height: 15vh; background-color: rgb(50, 63, 63); border: none;">\
                      <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                        <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
                        <span style="font-size: larger; color: #fffbfb;"> '+val.merchantNickname+' </span> &nbsp; \
                        <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
                        <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
                        <span><i class="fa fa-clock-o" aria-hidden="true"></i> '+val.OrderTime+' min</span>\
                        <span class="float-end">Bank Transfer</span>\
                        <br><span style="font-size: medium; color: #fffbfb;">'+val.currencySymbol+'  '+usdtCurrencyRate+'</span>\
                        <span class="float-end" > <button onclick="marchantOrdrtInit('+val.merchantuserID+')" type="button" class="btn btn-sm btn-success">Buy</button></span>\
                        <br> Limit <span style="color: #fffbfb;">'+val.currencySymbol+''+limitfrom+' - '+val.currencySymbol+''+limitto+'</span>\
                         <input type="hidden" id="currencySymbol'+val.merchantuserID+'" value="'+val.currencySymbol+'">\
                         <input type="hidden" id="orderTime'+val.merchantuserID+'" value="'+val.OrderTime+'">\
                         <input type="hidden" id="CurrencyRate'+val.merchantuserID+'" value="'+usdtCurrencyRate+'">\
                      </p>\
                      <div id="marchantID'+val.merchantuserID+'" style="color: #fffbfb; display: none;" >\
                        <span>Available Balance : '+val.currencySymbol+' '+total+'</span>\
                        <div class="row">\
                          <label for="exampleInputText1" class="form-label">Amount</label>\
                          <div class="col">\
                            <input  type="text" class="form-control" value="'+mybalance+'" id="OrderAmt'+val.merchantuserID+'">\
                          </div>\
                          <div class="col">\
                            <button onclick="createMarchantOrder(\''+userID+'\',\''+val.merchantuserID+'\',\''+val.usdtRate+'\',\''+myCurrency+'\')" type="button" class="btn btn-sm btn-success float-end">Send</button>\
                          </div>\
                        </div>\
                      </div>\
                    </li>')

                      }else{
                        
                        $("#bankMerchantList").html('Add Mayment Method')
                      }
                    }

                  }
                })
              }
            })

          }else{
            $("#bankMerchantList").append('<li class="list-group-item mb-3" style="height: 15vh; background-color: rgb(50, 63, 63); border: none;">\
                <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                  No Merchant Found\
                </p>\
                </li>')
          }
          
         
        });


        break;

        case "3":
          $("#topBacground").css({"display":"none"});
          $("#view").html('<div style="background-color: rgb(50, 63, 63); color: #f1de0b; margin-top: 10vh;" class="card">\
          <div class="card-header">\
            <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
           Cash Marchant List &#x62f;&#x2e;&#x625;\
          </div>\
          <div class="card-body " style="height: 80vh; margin-bottom: 10vh; overflow-y: auto;">\
            <ul  class="list-group">\
              <li id="" class="list-group-item mb-3" style="height: 15vh; background-color: rgb(50, 63, 63); border: none;">\
                <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                  <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
                  <span style="font-size: larger; color: #fffbfb;"> Sukanta sardar </span> &nbsp;\
                  <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
                  <br><span style="font-size: larger;"> Post : 700126 </span> &nbsp; \
                  <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
                  <span><i class="fa fa-clock-o" aria-hidden="true"></i> 15 min</span>\
                  <span class="float-end">Cash Collections</span>\
                  <br><span style="font-size: medium; color: #fffbfb;">&#8377;  0.912</span>\
                  <span class="float-end" > <button onclick="marchantOrdrtInit()" type="button" class="btn btn-sm btn-success">Buy</button></span>\
                  <br> Limit <span style="color: #fffbfb;">&#8377;2000.00 - &#8377;100000.00</span>\
                  <input type="hidden" id="userID" value="1">\
                </p>\
                <div id="marchantID" style="color: #fffbfb; display: none;" >\
                  <span>Available Balance : &#8377; 120000</span>\
                  <div class="row">\
                    <label for="exampleInputText1" class="form-label">Amount</label>\
                    <div class="col">\
                      <input  type="text" class="form-control" id="exampleInputText1" aria-describedby="textHelp">\
                    </div>\
                    <div class="col">\
                      <button onclick="createMarchantOrder()" type="button" class="btn btn-sm btn-success float-end">Send</button>\
                    </div>\
                  </div>\
                </div>\
              </li>\
            </ul>\
          </div>\
        </div>')
        
        break;
    
      default:
        break;
    }
  }

var tt=0;
  function marchantOrdrtInit(merchantuserID){
    if(tt==0){
      $('#marchantID'+merchantuserID+'').css({"display":"block"});
      $('#marh'+merchantuserID+'').css({"height":"27vh"});
      tt=1;
    }else{
      $('#marchantID'+merchantuserID+'').css({"display":"none"});
      $('#marh'+merchantuserID+'').css({"height":"15vh"});
      tt=0;
    }
  }

  function createMarchantOrder(userID,marchantID,usdtRate,currency){
    //console.log(userID,marchantID,usdtRate,currency)
    var orderAmt=$('#OrderAmt'+marchantID+'').val();
    var currencySymbol=$('#currencySymbol'+marchantID+'').val();
    var CurrencyRate=$('#CurrencyRate'+marchantID+'').val();
    var orderTime=$('#orderTime'+marchantID+'').val();
    

    //console.log(orderAmt, currencySymbol,CurrencyRate)
     $.post('/user/createMarchantOrder',{
      userID:userID,
      marchantID:marchantID,
      usdtRate:usdtRate,
      currency:currency,
      orderAmt:orderAmt,
      orderTime:orderTime,
      currencySymbol:currencySymbol,
      CurrencyRate:CurrencyRate
    },function(data){
      if(data=="pass"){
        orderDetails(userID,"Pending");
      }else{
        alert("Worng Order Amount")
      }
      
     })
   
  }

  function withdrawlCrypto(userID){
    var myCurrency=$("#myCurrency").val();
    var myBalance=$("#myBalance").val();
    var myUsdtBalance=$("#myUsdtBalance").val();
    var UsdtWithdrawl=$("#UsdtWithdrawl").val().trim();
    var usdtTokenAddress=$("#usdtTokenAddress").val().trim();
    var txnPin=$("#txnPin").val();

      if (usdtTokenAddress.length < 10 ) 
        {
            alert('Enter USDT Token');
            $("#usdtTokenAddress").focus();
            return 
        }

      if (Number(myUsdtBalance) <= Number(UsdtWithdrawl)) 
      {
       
          alert('Worng USDT Amount');
          $("#UsdtWithdrawl").focus();
          return 
        
        
      }
    

      if( Number(UsdtWithdrawl) == 0){
        alert('Worng USDT Amount');
        $("#UsdtWithdrawl").focus();
        return 
      }

    if (txnPin.length == 0) 
      {
          alert('Enter T-Pin');
          $("#txnPin").focus();
          return 
      }



      // alert("Worng USDT Amount");
      // $("#UsdtWithdrawl").focus();

     $.post('/user/withdrawlByCrypto',{
      userID:userID,
      myCurrency:myCurrency,
      myBalance:myBalance,
      myUsdtBalance:myUsdtBalance,
      UsdtWithdrawlAmt:UsdtWithdrawl,
      usdtTokenAddress:usdtTokenAddress,
      txnPin:txnPin
     },function(data){
      console.log(data)
      if(data.stutas=="200"){
        $("#withdralTotalBody").html('<div class="mb-3">\
        <p>Your Withdrawal is Successfull<br>\
        Transaction Ref Id: '+data.uid+'\
        </P>\
         </div>');
      }else{
        alert('Worng T-Pin Try again');
        $("#txnPin").focus();
      }
     
      });
    
    

  }

  function closeWithdral(){
    var allredyloginuserID=$("#allredyloginuserID").val();
    if(allredyloginuserID){
      getUserprofile(allredyloginuserID);
        
    }
  }
/////////Link With Android Studio////////
  function scanInit(userID){
    Webscan();
   // Android.showToast(userID);
  }

  function onScanResult(accountno) {
    //$("#q12").html(''+accountno+'')
    //alert("ok");
    // console.log("Received data:", data);
   
    $.post('/user/getUserIDcookey',{},function(userID){
      sendMoneylInt(userID,accountno);

    })

}

let html5QrCode;
function Webscan(){
 
  const qrCodeRegionId = "reader";
  $("#qrCamera").css({"display":"block"});
  $("#view").css({"display":"none"});
  $("#view1").css({"display":"none"});
  $("#topBacground").css({"display":"none"});
  
      
      if (!html5QrCode) {
        html5QrCode = new Html5Qrcode(qrCodeRegionId);
    }

      html5QrCode.start(
        
          { facingMode: "environment" }, // Use rear camera
          { fps: 10, qrbox: 200 },
          (decodedText, decodedResult) => {
              // document.getElementById("qr-result").querySelector("span").textContent = decodedText;
               console.log(decodedText);
               

              // Stop scanning once QR code is detected
              if (html5QrCode) {

              html5QrCode.stop().then(() => {
                  console.log("QR Scanner stopped.");
              }).catch(err => console.error("Error stopping scan: ", err));
            }

              // Return the scanned QR code data (Modify this function as needed)
              handleQRCodeScanned(decodedText);
          }
      ).catch(err => console.error("Error starting scan: ", err));
  

}


function qrcodeFromGalary(){
     ////JS QR ///

     document.getElementById("qr-file").addEventListener("change", function (event) {
      $("#galaryIcon").html('<i class="fa fa-picture-o" aria-hidden="true"></i><input  style=" visibility: hidden;" onclick="qrcodeFromGalary()" type="file" id="qr-file" accept="image/*">')
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function () {
          const img = new Image();
          img.src = reader.result;
          img.onload = function () {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

              const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
              const code = jsQR(imageData.data, imageData.width, imageData.height);

              if (code) {
                  // document.getElementById("qr-result").querySelector("span").textContent = code.data;
                  // console.log("QR Code Detected:", code.data);
                  // alert("Scanned QR Code: " + code.data);
                  handleQRCodeScanned(code.data);
                  html5QrCode.stop()
                  
              } else {
                  alert("No QR code found in the image.");
              }
          };
      };
      reader.readAsDataURL(file);
      
  });
}

function handleQRCodeScanned(qrData) {
  // Here you can send the data to the server, store it, or perform an action
  //alert("Scanned QR Code: " + qrData);
  $("#qrCamera").css({"display":"none"});
  $("#view").css({"display":"block"});
  $("#topBacground").css({"display":"block"});
  onScanResult(qrData)
 
  
}



function qrcode(accountNumber){
  const qrCode  = new QRCodeStyling({
    width: 250,
    height: 250,
    data: ''+accountNumber+'',
    dotsOptions: { color: "#000", type: "rounded" },
    backgroundOptions: { color: "#fff" },
    imageOptions: { crossOrigin: "PAA", margin: 5 }
  });
  
qrCode.append(document.getElementById("qrcode"));
}


function shareQRCode(accountNo) {
  const qrCode  = new QRCodeStyling({
    width: 256,
    height: 256,
    data: ''+accountNo+'',
    dotsOptions: { color: "#000", type: "rounded" },
    backgroundOptions: { color: "#fff" },
    imageOptions: { crossOrigin: "PAA", margin: 5 }
  });


  qrCode.getRawData("png").then((blob) => {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
          let base64data = reader.result.split(",")[1]; 
          //Android.shareQRCode(base64data);
      };
  });
}






  function sendMoneylInt(userID,account){

    $.post('/user/getUser',{userID:userID},function(user){
      if(user.varyficatinStatus=="Verified"){
        $("#topBacground").css({"display":"none"});
          $("#view").html('<div class="card" style="height: 90vh; margin-top: 9vh; background-color: rgb(78, 83, 83); color: antiquewhite;">\
          <div class="card-header">\
            <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
            <p class="h3">Send Money to Crypto Bank</p>\
          </div>\
          <div id="sendAccountDetails" class="mb-3 p-3">\
          <div class="mb-1 p-2">\
            <label for="formFile" class="form-label">Currency</label>\
            <select id="senderMyCurrency" class="form-select" aria-label="Default select example">\
              <option value="INR">Select Currency</option>\
            </select>\
            </div>\
            <div class="mb-3 p-2">\
            <label for="" class="form-label">Account No:</label>\
            <div class="input-group">\
              <input id="reciverAccountNo" type="text" class="form-control" aria-label="" aria-describedby="button-addon2">\
              <button onclick="verifysendAccount('+userID+')" style="color: rgb(27, 201, 109);" class="btn btn-outline-secondary" type="button" id="button-addon2">Verify</button>\
            </div>\
            </div>\
          </div>\
          <div id="sendaccountBody" class="card-body">\
        </div>')
      getMycurrency(userID);

      ///////Account No put from Android//////
      if(account){
        $("#reciverAccountNo").val(account);
      }

      }else{
        alert("You Need to Your Verify Your Account ")
      }
    })
    
  }

   function getMycurrency(userID){
    $("#senderMyCurrency").html('')
      $.post('/user/senderGetMycurrency',{userID:userID},function(currency){
      if(currency.length > 0 ){
        currency.forEach(val => {
          $("#senderMyCurrency").append('<option value="'+val.currency+'">'+val.currency+'</option>')
        });
        }
      });
  }

  // function recentPayment(){
  //   $("#sendaccountBody").html('<ul class="list-group">\
  //     <li class="list-group-item active" aria-current="true">Recents</li>\
  //     <li class="list-group-item">\
  //       Sukanta Sardar.. 1234567890987\
  //     </li>\
  //   </ul>')
  // }

  function verifysendAccount(userID){
    var reciverAccountNo=$("#reciverAccountNo").val().trim();
    var senderMyCurrency=$("#senderMyCurrency").val();
    if(reciverAccountNo && senderMyCurrency){
      $.post('/user/verifyAccountno',{reciverAccountNo:reciverAccountNo,senderMyCurrency:senderMyCurrency, senderuserID:userID},function(res){
      if(res.status){
          if(res.status=="success"){
            var senderBalance=Number(res.senderCurrency.lastcheckBalance) - Number(res.senderCurrency.frzeeFiatAmount);
            $("#sendAccountDetails").css({"display":"none"})
            $("#sendaccountBody").html('<p class="h6">Reciver Account Details:<br>Account No: '+res.reciveruser.accountNumber+'</p>\
            <p class="h6">Name: '+res.reciveruser.userName+'</p><hr>\
            <div id="sendDetails" class="mb-3">\
              <label for="exampleInputText1" class="form-label float-end">Blance : '+Number(senderBalance).toFixed(2)+'</label>\
              <input id="senderCurrency" type="hidden" value ="'+senderMyCurrency+'">\
              <input id="senderBalance" type="hidden" value ="'+senderBalance+'">\
              <input id="reciverAccountno" type="hidden" value ="'+res.reciveruser.accountNumber+'">\
              <input id="reciveruserID" type="hidden" value ="'+res.reciveruser.userID+'">\
              <label  for="exampleInputText1" class="form-label">Amount</label>\
              <input id="senderAmount" type="text" class="form-control mb-2" aria-describedby="textHelp"> \
               <label  for="exampleInputText1" class="form-label">Purpose</label>\
                <select name="" id="purpose" class="form-control" required="required">\
                  <option value="Trade">Trade</option>\
                  <option value="Medical">Medical</option>\
                  <option value="Living Cost">Living Cost</option>\
                  <option value="Education">Education</option>\
                  <option value="Business">Business</option>\
                  <option value="Other">Other</option>\
                </select>\
            </div>\
          <div id="sendBtn" class="d-grid gap-2">\
                  <button onclick="verifyTpin('+userID+')" class="btn btn-primary " type="button">Next</button>\
          </div>');
          }else{
            alert("Reciver Account Not Able to Recive this Currency")
          }
  
          }else{
            alert("Worng Account Number");
          }
        });
    }else{
      alert("Enter Reciver Account Number")
    }
     
 
  }

  function verifyTpin(userID){
    var senderBalance=$("#senderBalance").val();
    var senderAmount=$("#senderAmount").val();
    var senderCurrency=$("#senderCurrency").val();
    

    $.post('/user/findCharges',{senderAmount:senderAmount,userID:userID,senderCurrency:senderCurrency},function(charge){
      if(charge){
        if(Number(senderBalance) >= Number(senderAmount) + Number(charge)){
          $("#sendDetails").append('<label  class="form-label float-end">Transaction Charge : '+Number(charge).toFixed(2)+'</label>\
          <label style="width: 50%; margin-left: 25%; "  class="form-label text-center">T-Pin</label>\
          <input id="txnPin" type="text" class="form-control text-center" style="width: 50%; margin-left: 25%;">');
          $("#sendBtn").html('<button id="sendToReceverBtn" onclick="sentToReceverAccount('+userID+','+charge+')" class="btn btn-primary " type="button">Send</button>');
          $("#senderAmount").attr('disabled','disabled');
        }else{
          alert("Amount Must Less then Balance");
        }
        }else{
          alert("Error Code :102, Charges Not Apply")
        }
      });
    
    
    
    
  }

  function sentToReceverAccount(userID,charge){
    $("#sendToReceverBtn").css({"display":"none"});

    var senderAmount=$("#senderAmount").val();
    var senderCurrency=$("#senderCurrency").val();

    var reciverAccountno=$("#reciverAccountno").val();
    var reciveruserID=$("#reciveruserID").val();

    var txnPin=$("#txnPin").val();

    if (txnPin.length == 0) 
      {
          alert('Enter T-Pin');
          $("#txnPin").focus();
         $("#sendToReceverBtn").css({"display":"block"});
          return 
      }

    $("#sendToReceverBtn").css({"display":"none"});
    $.post('/user/sentAmountToReceverAccount',{
      userID:userID,
      senderAmount:senderAmount,
      senderCurrency:senderCurrency,
      charge:charge,
      reciverAccountno:reciverAccountno,
      reciveruserID:reciveruserID,
      txnPin:txnPin
    },function(data){
      if(data.tpin=="Varified"){
      //<img style="width: 60%; margin-left: 20%;" src="/images/logo/logo.png" class="card-img-top mt-2" alt="...">\
      $("#topBacground").css({"display":"none"});
      $("#view").html('<div class="card" style="margin-top: 8vh; margin-bottom: 8vh; overflow-y: auto; ">\
      <div class="card-body">\
        <div  class="card-header text-center mb-3">\
          <span class="mb-2 p-2">To '+data.to+'</span>\
          <p style="font-size: 30px;">'+data.symbol+' '+Number(data.amount).toFixed(2)+'</p>\
          <span style="border-radius: 10px; border: 1px solid #041b2b; color: #d9e3db; background-color: #0c892b;" class="p-2 h6 ">Fast Transfer</span>\
         </div>\
        <ul  class="list-group">\
          <li class="list-group-item mb-3 p-3 bg-success active" aria-current="true">\
             <span style="font-size: medium;" class="badge float-end">'+data.status+'</span>\
            Status\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.toAccount+'</span>\
            To Account No\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+dateFormat(new Date(data.date),"dt")+'</span>\
            Date\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.referance+'</span>\
            Referance\
          </li>\
          <li class="list-group-item mb-2 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.txid+'</span>\
            Transaction ID\
          </li>\
          <li class="list-group-item mb-3 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.symbol+' '+Number(data.fee).toFixed(2)+'</span>\
            Fee\
          </li>\
          <li class="list-group-item mb-3 p-3">\
            <span style="font-size: medium; color: #000;" class="badge float-end">'+data.fromAccount+'</span>\
            From Account No\
          </li>\
          <li class="list-group-item mb-3 p-3">\
            <button onclick="getUserprofile('+userID+')" type="button" class="btn btn-success">Done</button>\
          </li>\
        </ul>\
      </div>\
    </div>')
      }else{
        alert("Transaction PIN (T-PIN) Varification Fail");
        $("#sendToReceverBtn").css({"display":"block"});

      }

    })

    

  }


  /////////////Currency Convert//////////

  function currencyConvert(userID){
    $("#topBacground").css({"display":"none"});
          $("#view").html('<div style="margin-top: 10vh;" class="row p-2">\
          <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
          <div class="col">\
              <label class="">My Currency</label>\
              <select id="MyCurrency" onchange="getMyBalance(this.value)" style="width: 80%;" class="form-select form-select-sm" aria-label=".form-select-sm example">\
               <option value="">Select Currency</option>\
              </select>\
              <div id="MyCurrencyBalance" class="mb-3">\
                \
             </div>\
          </div>\
          <div class="col">\
            <label class="">Convert Currency</label>\
            <select id="Allcurrency" style="width: 80%;" class="form-select form-select-sm mb-4" aria-label=".form-select-sm example">\
            </select>\
            <label id="convertAmountLable"  class=""></label>\
             <inpun id="convertingFee" type="hidden" value=""/>\
            <inpun id="convertingFeeUsdt" type="hidden" value=""/>\
            <inpun id="convertingAmt" type="hidden" value=""/>\
            <inpun id="convertUsdt" type="hidden" value=""/>\
            <inpun id="convertAmount" type="hidden" value=""/>\
            <inpun id="convertingCurrency" type="hidden" value=""/>\
            <inpun id="convertingCurrencySymbol" type="text" value=""/>\
            <inpun id="convertCurrency" type="hidden" value=""/>\
            <inpun id="convertCurrencySymbol" type="hidden" value=""/>\
          </div>\
          <div class="d-grid gap-2 mb-3">\
            <button id="verifyBtn" onclick="convertVerufy()" style="display:none; " class="btn btn-warning"><a href="">Verify</a></button>\
          </div>\
         <div id="tPinbtnLable" style="display:none;" class="mb-3">\
          <label style="width: 50%; margin-left: 25%;" class="form-label text-center">T-Pin</label>\
          <input  id="txnPin" type="text" class="form-control text-center" style="width: 50%; margin-left: 25%;">\
          </div>\
          <div class="d-grid gap-2" >\
            <button id="convertBtn" style="display:none; " onclick="convertCurrencyBtn('+userID+')" class="btn btn-primary" type="button">Convert</button>\
          </div>\
        </div>');
        $.post('/user/getConvertCurrency',{userID:userID},function(data){
          if(data.user.varyficatinStatus=="Verified"){
            //console.log(data.myCurrency)
            data.myCurrency.forEach(myCrncy => {
             // console.log(myCrncy)
              $("#MyCurrency").append('<option value="'+myCrncy.currency+','+myCrncy.frzeeFiatAmount+','+myCrncy.lastcheckBalance+','+myCrncy.frzeeFiatAmount+','+myCrncy.lastCheckUsdtAmount+','+myCrncy.currencySymbol+'">'+myCrncy.currency+'</option>')

            });

            data.currency.forEach(val => {
            //  console.log(val)
              $("#Allcurrency").append('<option value="'+val.currency+','+val.currencySymbol+'">'+val.currency+'</option>')

            });
           
          }else{
            alert("You Need to Your Verify Your Account ")
          }

        })
        
        
  }

  function getMyBalance(req){
    const val=req.split(',');
   //console.log(req.split(','))
   var Balance= Number(val[2]) - Number(val[1]);
   var BalanceUsdt= Number(val[4]) - Number(val[3]);
   var currency = val[0];
   var currencySymbol= val[5];
   $("#MyCurrencyBalance").html('<label class="">My Balance <br> '+currencySymbol+' '+Balance.toFixed(2)+'</label>\
      <label for="exampleInputText1" class="form-label">Enter Amount</label>\
      <input type="text" class="form-control" id="inputAmount" aria-describedby="textHelp">\
      ');

      $("#inputAmount").focus();
      $("#verifyBtn").css({"display":"block"});
  }

  function convertVerufy(){
    var myCrrency= $("#MyCurrency").val().split(",");
    var convertCurrency=$("#Allcurrency").val().split(",");
    var currency = myCrrency[0];
    var currencySymbol= myCrrency[5];
    var Balance= Number(myCrrency[2]) - Number(myCrrency[1]);
    var BalanceUsdt= Number(myCrrency[4]) - Number(myCrrency[3]);

    var convertingAmount=$("#inputAmount").val();
    var convertCuerrency =convertCurrency[0];
    var convertCuerrencySimbol = convertCurrency[1];
   // console.log(convertCuerrency)

    var fee=Number(convertingAmount)*1/100;
    //console.log(convertingAmount,"fee",fee)
    if(Balance > Number(convertingAmount)+ Number(fee) && Number(convertingAmount)>0 ){
    
      $.post('/user/convertVerufy',{currency:currency,convertCuerrency:convertCuerrency},function(data){
       // console.log(data)
       if(data){
        $("#tPinbtnLable").css({"display":"block"});
        $("#convertBtn").css({"display":"block"});
        $("#convertAmountLable").css({"display":"block"});

        

        var convertingUsdtRate=Number(Balance) / Number(BalanceUsdt);
        var convertUsdt=Number(convertingAmount) / Number(convertingUsdtRate);
        var afterConvertAmt=Number(data.usdtRate) * Number(convertUsdt);
        var convertingFeeUsdt=Number(fee) / Number(convertingUsdtRate);

        //console.log("convertingUsdtRate",convertingUsdtRate,"Balance",Balance,"BalanceUsdt",BalanceUsdt,"myCrrency",myCrrency)

        $("#convertingFee").val(fee);
        $("#convertingFeeUsdt").val(convertingFeeUsdt)
        $("#convertingAmt").val(convertingAmount)
        $("#convertUsdt").val(convertUsdt)
        $("#convertAmount").val(afterConvertAmt)
        $("#convertingCurrency").val(currency)
        $("#convertingCurrencySymbol").val(currencySymbol)
        $("#convertCurrency").val(convertCuerrency)
        $("#convertCurrencySymbol").val(convertCuerrencySimbol)
      
        $("#convertAmountLable").html(''+convertCuerrencySimbol+'  '+Number(afterConvertAmt).toFixed(2)+'<br><br>Fee : '+currencySymbol+' '+fee+'');
       }

      });
    }else{
      $("#tPinbtnLable").css({"display":"none"});
      $("#convertBtn").css({"display":"none"});
      $("#convertAmountLable").css({"display":"none"});
      alert("Check Amount")
      $("#inputAmount").focus();
    }
  }

  function convertCurrencyBtn(userID){
    var fee = $("#convertingFee").val();
    var convertingFeeUsdt = $("#convertingFeeUsdt").val()
    var convertingAmount = $("#convertingAmt").val()
    var convertUsdt = $("#convertUsdt").val()
    var afterConvertAmt = $("#convertAmount").val()
    var currency = $("#convertingCurrency").val()
    var currencySymbol = $("#convertingCurrencySymbol").val()
    var convertCuerrency = $("#convertCurrency").val()
    var convertCuerrencySimbol = $("#convertCurrencySymbol").val()
    var txPin= $("#txnPin").val();
    $.post('/user/getUser',{userID:userID},function(user){
      if(user){
        //console.log(user)
        if(Number(user.transactionPin) == Number(txPin)){
         // alert("procid")
          $("#convertBtn").attr('disabled','disabled');
          $("#verifyBtn").attr('disabled','disabled');
          $.post('/user/startCurrencyConvert',{
            userID:userID,
            fee :fee ,
            convertingFeeUsdt:convertingFeeUsdt,
            convertingAmount:convertingAmount,
            currency:currency,
            currencySymbol:currencySymbol,
            convertUsdt:convertUsdt,
            afterConvertAmt:afterConvertAmt,
            convertCuerrency : convertCuerrency,
            convertCuerrencySimbol :convertCuerrencySimbol
          },function(data){
            if(data){
              //<img style="width: 60%; margin-left: 20%;" src="/images/logo/logo.png" class="card-img-top mt-2" alt="...">\
              $("#topBacground").css({"display":"none"});
              $("#view").html('<div class="card" style="margin-top: 8vh; margin-bottom: 8vh; overflow-y: auto; ">\
              <div class="card-body">\
                <div  class="card-header text-center mb-3">\
                  <span class="mb-2 p-2">To '+data.to+'</span>\
                  <p style="font-size: 30px;">'+data.symbol+' '+Number(data.amount).toFixed(2)+'</p>\
                  <span style="border-radius: 10px; border: 1px solid #041b2b; color: #d9e3db; background-color: #0c892b;" class="p-2 h6 ">Fast Transfer</span>\
                 </div>\
                <ul  class="list-group">\
                  <li class="list-group-item mb-3 p-3 bg-success active" aria-current="true">\
                     <span style="font-size: medium;" class="badge float-end">'+data.status+'</span>\
                    Status\
                  </li>\
                  <li class="list-group-item mb-2 p-3">\
                    <span style="font-size: medium; color: #000;" class="badge float-end">'+data.toAccount+'</span>\
                    To Account No\
                  </li>\
                  <li class="list-group-item mb-2 p-3">\
                    <span style="font-size: medium; color: #000;" class="badge float-end">'+dateFormat(new Date(data.date),"dt")+'</span>\
                    Date\
                  </li>\
                  <li class="list-group-item mb-2 p-3">\
                    <span style="font-size: medium; color: #000;" class="badge float-end">'+data.referance+'</span>\
                    Referance\
                  </li>\
                  <li class="list-group-item mb-2 p-3">\
                    <span style="font-size: medium; color: #000;" class="badge float-end">'+data.txid+'</span>\
                    Transaction ID\
                  </li>\
                  <li class="list-group-item mb-3 p-3">\
                    <span style="font-size: medium; color: #000;" class="badge float-end">'+currencySymbol+' '+Number(data.fee).toFixed(2)+'</span>\
                    Fee\
                  </li>\
                  <li class="list-group-item mb-3 p-3">\
                    <span style="font-size: medium; color: #000;" class="badge float-end">'+data.fromAccount+'</span>\
                    From Account No\
                  </li>\
                  <li class="list-group-item mb-3 p-3">\
                    <button onclick="getUserprofile('+userID+')" type="button" class="btn btn-success">Done</button>\
                  </li>\
                </ul>\
              </div>\
            </div>')
              }

          })

        }else{
          alert("Transaction PIN mismatch")
        }


      }

    })


  }




/////////Account Verification///////

function verifyNowinit(){
  window.location.href = "/user/verify";
}

  function verifyNow(userID){
    $("#topBacground").css({"display":"none"});
    $("#view").html(' <form id="formIdkyc" onsubmit="desebleSubmitBtn()" action="/user/kycUpload"  enctype="multipart/form-data" method="post">\
    <div class="card" style="height: 81vh; margin-top: 9vh; margin-bottom: 10vh; overflow-y: auto; background-color: rgb(78, 83, 83); color: antiquewhite;">\
     <div class="accordion" id="accordionPanelsStayOpenExample">\
       <div class="accordion-item">\
         <h2 class="accordion-header" id="panelsStayOpen-headingOne">\
           <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">\
             KYC Verification:\
           </button>\
         </h2>\
         <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">\
           <div class="accordion-body">\
             <div class="mb-3">\
               <label for="exampleInputText1" class="form-label">Full Name: </label>\
               <input onkeyup="nameUpdate(this.value)" type="text" class="form-control" name="kycName" aria-describedby="textHelp">\
               <div id="textHelp" class="form-text">Name as per Govt ID card</div>\
             </div>\
             <div class="mb-3">\
               <label for="exampleInputText1" class="form-label">Address</label>\
               <input type="text" class="form-control" name="kycAds1" aria-describedby="textHelp">\
               <div id="textHelp" class="form-text">Address Line 1</div>\
             </div>\
             <div class="mb-3">\
               <input type="text" class="form-control" name="kycAds2" aria-describedby="textHelp">\
               <div id="textHelp" class="form-text">Address Line 2</div>\
             </div>\
             <div class="mb-3">\
               <label for="exampleInputText1" class="form-label">Pin / Post Code: </label>\
               <input type="text" class="form-control" name="kycPincode" aria-describedby="textHelp">\
             </div>\
             <div class="mb-3">\
               <label for="exampleInputText1" class="form-label">City :</label>\
               <input type="text" class="form-control" name="kycCity" aria-describedby="textHelp">\
             </div>\
             <div class="mb-3">\
               <label for="exampleInputText1" class="form-label">Country :</label>\
               <select name="kycCuntry" id="kycCuntry" class="form-select" id="kycCountry">\
                 <option value="India">India</option>\
                 <option value="2">Two</option>\
                 <option value="3">Three</option>\
               </select>\
             </div>\
           </div>\
         </div>\
       </div>\
       <div class="accordion-item">\
         <h2 class="accordion-header" id="panelsStayOpen-headingTwo">\
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">\
             Document Upload:\
           </button>\
         </h2>\
         <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">\
           <div class="accordion-body">\
             <div class="mb-3">\
               <label class="btn btn-default ">Selfe Photo &nbsp; <span style="color: darkblue;" ><i class="fa fa-camera" aria-hidden="true"></i></span> \
                 <input name="fileSelfe" type="file" accept="image/*" capture="camera" style="width: 1px; height: 1px;">\
             </label>\
             <div id="textHelp" class="form-text">Image should be Clear</div>\
             </div>\
             <select name="kycID" class="form-select" aria-label="Default select example">\
               <option value="PAN CARD">PAN CARD</option>\
               <option value="Aadhar card">Aadhar card</option>\
               <option value="Driving Licence">Driving Licence</option>\
               <option value="Passport">Passport</option>\
               <option value="National ID Card">National ID Card</option>\
             </select>\
             <div class="mb-3">\
               <input type="text" class="form-control" name="kycIdNo" aria-describedby="textHelp">\
             </div>\
             <div class="mb-3">\
               <label class="btn btn-default">Govt ID Card &nbsp; <span style="color: darkblue;" ><i class="fa fa-camera" aria-hidden="true"></i></span> \
                 <input name="filekycId" type="file" accept="image/*" capture="camera" style="width: 1px; height: 1px;">\
             </label>\
               <div id="textHelp" class="form-text">Image should be Clear</div>\
             </div>\
           </div>\
         </div>\
       </div>\
       <div class="accordion-item">\
         <h2 class="accordion-header" id="panelsStayOpen-headingThree">\
           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">\
            Record Video:\
           </button>\
         </h2>\
         <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">\
           <div class="accordion-body">\
             <label for="exampleInputText1" id="videoContent" class="form-label">Record a Video : <br/> </label>\
             <label class="btn btn-default">Record Video &nbsp; <span style="color: darkblue;" ><i class="fa fa-camera" aria-hidden="true"></i></span>\
               <input name="filekycVideo" type="file" accept="video/*" capture="camcorder" style="width: 1px; height: 1px;">\
           </label>\
           <input  name="userID" value="'+userID+'" type="hidden">\
           <div id="kycsubmitArea" class="mb-3">\
               <button  type="submit"  class="btn btn-secondary">Submit</button>\
           </div>\
         </div> \
       </div>\
     </div>\
     </div>\
     </div>\
   </form>')
   cuntryList();
  }

  function cuntryList(){
    $.post('/user/getCountryList',{},function(data){
    if(data){
      $("#kycCuntry").html('');
      data.forEach(val => {
        $("#kycCuntry").append('<option value="'+val.country+'">'+val.country+'</option>');
          });
        }
      })
}



  function nameUpdate(name){
    $("#videoContent").html('Record a Video : <br/>Hi , My Name is '+name+' my date of birth dd/mm/yyyy. I like to open paa crypto bank account')
  }


  function setResetTpin(userID){

    $("#topBacground").css({"display":"none"});
    $("#view").html('<div class="card" style="margin-top: 20vh; background-color: #2e353a; color: rgb(164, 199, 119);">\
    <div class="card-header">\
      <button onclick="closeWithdral()" type="button" class="btn-close btn-close-white float-end" aria-label="Close"></button>\
      <h5>Set / Re-Set Transaction Pin</h5>\
    </div>\
    <div id="tpinBody" class="card-body">\
      <div class="mb-3">\
        <label for="formFile" class="form-label">Login Password</label>\
        <input class="form-control text-center" type="password" id="passw">\
         <label id="msgtpin" style="display:none; color:#dd8aa4" class="form-label">Password Not Matvh Try Again</label>\
      </div>\
      <button onclick="tpinVeryfyPassword('+userID+')" type="button" class="btn btn-success">Veryfy</button>\
    </div>\
  </div>')
  }

  function tpinVeryfyPassword(userID){
    var pasw=$("#passw").val();
    $.post('/user/verifyPassword',{pasw:pasw,userID:userID},function(data){
        if(data){
          $("#tpinBody").html('<div class="mb-3">\
            <label for="exampleInputText1" class="form-label">New T Pin</label>\
            <input type="number" class="form-control text-center" id="tpin1" aria-describedby="textHelp">\
            <div id="textHelp" class="form-text">4 Digit Transaction Pin</div>\
          </div>\
          <div class="mb-3">\
            <label for="exampleInputText1" class="form-label">Re-Type T Pin</label>\
            <input type="number" class="form-control text-center" id="tpin2" aria-describedby="textHelp">\
          </div>\
          <button onclick="setTPin('+userID+')" type="button" class="btn btn-success">Set Pin</button>')
        }else{
          $("#msgtpin").css({"display":"block"})
        }
    })
  }


  function setTPin(userID){
    var tpin1=$("#tpin1").val();
    var tpin2=$("#tpin2").val();
    if(tpin1==tpin2 && tpin1.length > 0 && tpin2.length > 0 ){
      $.post('/user/setTpin',{tpin:tpin1,userID:userID},function(data){
        if(data){
          getUserprofile(userID);
        }
      })
    }else{
      alert("Pin not Match");
    }
   
  }
 
  

  // function merchantInit(userID){
  //   $("#topBacground").css({"display":"none"});
  //   $.post('/user/getmerchant',{userID:userID},function(data){
  //    if(data){
  //       //console.log(data)
  //       if(data.merchantStatus=="Accept"){
  //         $("#view").html('<div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; ">\
  //         <div class="card-header">\
  //           <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
  //          <h3>Merchant</h3> \
  //          <p onclick="oofon()">'+data.merchantNickname+' <span onclick ="editmerchantNickname('+userID+')" ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span><br>'+data.merchantType+'</p>\
  //          <div style="margin-top: -25px;" class="form-check form-switch">\
  //           <span id="onOffText" style="margin-left: 24vh;">Online</span>\
  //           <input onclick ="onlineOffline('+userID+')" style="" class="form-check-input float-end" type="checkbox" role="switch" id="onoff">\
  //         </div>\
  //         </div>\
  //       <div class="card-body">\
  //         <div class="row" style="height: 30vh; overflow-y: auto; font-size: x-small;">\
  //             <div class="col">\
  //                <div class="mb-3">\
  //                 <label  class="form-label">Total Amount</label>\
  //                 <input type="text" class="form-control" id="mrchTotalAmt" value="'+data.totalFund+'">\
  //                </div>\
  //                <div class="mb-3">\
  //                 <label  class="form-label">USDT Rate</label>\
  //                 <input type="text" class="form-control" id="mrchUsdtRate" value="'+data.usdtRate+'">\
  //                </div>\
  //                <div class="mb-3">\
  //                 <label  class="form-label">Time '+data.OrderTime+' min</label>\
  //                 <select class="form-select" id="mrchOrderTime">\
  //                     <option value="15" selected>Select Option</option>\
  //                     <option value="15">15 min</option>\
  //                     <option value="30">30 min</option>\
  //                     <option value="60">60 min</option>\
  //                     <option value="120">120 min</option>\
  //                     <option value="180">180 min</option>\
  //                     <option value="360">360 min</option>\
  //                     <option value="1440">24 hr</option>\
  //                   </select>\
  //                </div>\
  //             </div>\
  //             <div class="col">\
  //                 <div class="mb-3">\
  //                     <label  class="form-label">Limit</label>\
  //                     <input type="text" class="form-control" id="mrchLimitFrom" value="'+data.limitFrom+'"><br>\
  //                     <span style="text-align: center; font-size: small;">To</span>\
  //                     <input type="text" class="form-control" id="mrchLimitTo" value="'+data.limitTo+'">\
  //                 </div>\
  //                 <div class="mb-3">\
  //                     <label  class="form-label">Pay Through</label>\
  //                     <select class="form-select" id="mrchType">\
  //                         <option value="Bank Transfer">Bank Transfer</option>\
  //                         <option value="Cash Collections">Cash Collections</option>\
  //                       </select>\
  //                    </div>\
  //             </div>\
  //             <div class="d-grid gap-2">\
  //                 <button onclick ="mrchSavechanges('+userID+')" class="btn btn-primary btn-xs" type="button">Save Changes</button>\
  //             </div>\
  //           </div>\
  //         <div class="row">\
  //             <div class="col">\
  //                 <div class="card-header">\
  //                    <h4>Merchant Order</h4>\
  //                    <select onchange="marchentOrderList('+userID+', this.value)" class="form-select">\
  //                    <option value="">Select Oder Type</option>\
  //                     <option value="Pending">Pending</option>\
  //                     <option value="Complete">Complete</option>\
  //                   </select>\
  //                   </div>\
  //                 <div class="card-body" style="height: 25vh; overflow-y: auto;">\
  //                     <ul id="mrchOrderlist" class="list-group">\
  //                       </ul>\
  //                 </div>\
  //             </div>\
  //         </div>\
  //       </div>\
  //     </div> ');

  //             if(data.onlineOffline==0){
  //               $("#onoff").prop('checked', false);
  //               $("#onOffText").html('Offline');
  //             }else{
  //               $("#onoff").prop('checked', true);
  //               $("#onOffText").html('Online');
  //             }
           

  //       }else{
  //         //alert("Your are under review or cryteria not match");
  //         $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
  //               <div class="card-header">\
  //                 <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
  //               <h2>Merchant Alert</h2> \
  //               </div>\
  //             <div class="card-body">\
  //               <p class="card-text">\
  //               Your are under review or cryteria not match\
  //               </p>\
  //               </div>\
  //           </div>')
  //       }

  //    }else{
  //     $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
  //     <div class="card-header">\
  //       <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
  //      <h2>Become A Merchant</h2> \
  //     </div>\
  //   <div class="card-body">\
  //     <h5 class="card-title">Merchant Criteria</h5>\
  //     <p class="card-text">\
  //       1. Deposit 500 usdt<br>\
  //       2. Proof of funds( we accept the following documents as proof of funds. Bank statements, payslip,gift certificate,sale of property documents,loan etc<br>\
  //       3. Proof of addresses document ( bank statements, credit card statement,gas electricity bill)<br>\
  //       4. Then click to become the Merchant button\
  //     </p>\
  //     <button id="merchantBecome" onclick="becomemerchant('+userID+')" type="button" class="btn btn-secondary">Become a merchant</button>\
  //   </div>\
  // </div>\
  // ')
  //    }
  //   })
  // }

  function merchantInit(userID) {
    $("#topBacground").css({ "display": "none" });

    $.get(`/user/getMerchant/${userID}`, function (data) {
      console.log(data)
        if (data) {
            if (data.merchantStatus == "Accept") {
                $("#view").html(`
                    <div class="card mt-4">
                        <div style="margin-top: 5vh;" class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="mb-0">Merchant</h4>
                            <button onclick="closeWithdral()" type="button" class="btn-close"></button>
                        </div>
                        <div class="card-body" style="font-size: 0.9rem;">
                            <!-- Merchant Nickname -->
                            <div class="d-flex align-items-center mb-2"">
                            <strong class="me-2">${data.merchantNickname}</strong>
                                <button onclick="editMerchantNickname(${userID})" class="btn btn-sm btn-outline-primary">
                                    <i class="fa fa-pencil"></i>
                                </button> &nbsp;&nbsp;&nbsp;&nbsp;
                                 <strong class="me-2">${data.merchantType}</strong>
                            </div>

                            <!-- Bootstrap Tabs (Single Row) -->
                            <ul class="nav nav-tabs nav-fill small">
                                <li class="nav-item">
                                    <a class="nav-link active" id="deposit-tab" data-bs-toggle="tab" href="#deposit">Deposit</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="withdraw-tab" data-bs-toggle="tab" href="#withdraw">Withdrawal</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="orders-tab" data-bs-toggle="tab" href="#orders">Orders</a>
                                </li>
                            </ul>

                            <div class="tab-content mt-2" style="height: 65vh; overflow-y: auto;">
                                <!-- Deposit Tab -->
                                <div class="tab-pane fade show active" id="deposit">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>Online Status</span>
                                        <div class="form-check form-switch">
                                            <input onclick="onlineOffline(${userID})" class="form-check-input" type="checkbox" id="onoff-deposit">
                                            <label class="form-check-label" id="onOffText-deposit">Offline</label>
                                        </div>
                                    </div>

                                    <div class="mb-2">
                                        <label class="form-label">Total Amount</label>
                                        <input type="text" class="form-control form-control-sm" id="mrchTotalAmt" value="${data.totalFund}">
                                    </div>

                                   <div class="mb-2">
                                          <label class="form-label">Charges (%)</label>
                                          <select class="form-select form-select-sm" id="mrchCharges">
                                              <!-- Generate options from 0.1% to 3% with a step of 0.1% -->
                                              ${[...Array(30)].map((_, i) => {
                                                  let value = (i + 1) / 10;
                                                  return `<option value="${value}">${value}%</option>`;
                                              }).join('')}
                                          </select>
                                      </div>

                                    <div class="mb-2">
                                        <label class="form-label">Limit (From - To)</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control form-control-sm me-1" id="mrchLimitFrom" value="${data.limitFrom}">
                                            <input type="text" class="form-control form-control-sm" id="mrchLimitTo" value="${data.limitTo}">
                                        </div>
                                    </div>

                                    <div class="mb-2">
                                        <label class="form-label">Transaction Time</label>
                                        <select class="form-select form-select-sm" id="mrchOrderTime">
                                            <option value="15">15 min</option>
                                            <option value="30">30 min</option>
                                            <option value="60">60 min</option>
                                            <option value="120">120 min</option>
                                            <option value="180">180 min</option>
                                            <option value="360">360 min</option>
                                            <option value="1440">24 hr</option>
                                        </select>
                                    </div>

                                    <div class="mb-2">
                                        <label class="form-label">Transaction Through</label>
                                        <select class="form-select form-select-sm" id="mrchType">
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Cash Collections">Cash Collections</option>
                                        </select>
                                    </div>

                                    <button onclick="mrchSavechanges(${userID})" class="btn btn-primary btn-sm">Save</button>
                                </div>

                                <!-- Withdrawal Tab -->
                                <div class="tab-pane fade" id="withdraw">
                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                        <span>Online Status</span>
                                        <div class="form-check form-switch">
                                            <input onclick="onlineOffline(${userID})" class="form-check-input" type="checkbox" id="onoff-withdraw">
                                            <label class="form-check-label" id="onOffText-withdraw">Offline</label>
                                        </div>
                                    </div>

                                    <div class="mb-2">
                                        <label class="form-label">Total Amount</label>
                                        <input type="text" class="form-control form-control-sm" id="mrchTotalAmtWithdraw" value="${data.totalFund}">
                                    </div>

                                   <div class="mb-2">
                                          <label class="form-label">Charges (%)</label>
                                          <select class="form-select form-select-sm" id="mrchCharges">
                                              <!-- Generate options from 0.1% to 3% with a step of 0.1% -->
                                              ${[...Array(30)].map((_, i) => {
                                                  let value = (i + 1) / 10;
                                                  return `<option value="${value}">${value}%</option>`;
                                              }).join('')}
                                          </select>
                                      </div>

                                    <div class="mb-2">
                                        <label class="form-label">Limit (From - To)</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control form-control-sm me-1" id="mrchLimitFromWithdraw" value="${data.limitFrom}">
                                            <input type="text" class="form-control form-control-sm" id="mrchLimitToWithdraw" value="${data.limitTo}">
                                        </div>
                                    </div>

                                    <div class="mb-2">
                                        <label class="form-label">Transaction Time</label>
                                        <select class="form-select form-select-sm" id="mrchOrderTimeWithdraw">
                                            <option value="15">15 min</option>
                                            <option value="30">30 min</option>
                                            <option value="60">60 min</option>
                                            <option value="120">120 min</option>
                                            <option value="180">180 min</option>
                                            <option value="360">360 min</option>
                                            <option value="1440">24 hr</option>
                                        </select>
                                    </div>

                                    <div class="mb-2">
                                        <label class="form-label">Transaction Through</label>
                                        <select class="form-select form-select-sm" id="mrchTypeWithdraw">
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Cash Collections">Cash Collections</option>
                                        </select>
                                    </div>

                                    <button onclick="withdrawFunds(${userID})" class="btn btn-danger btn-sm">Save</button>
                                </div>

                                <!-- Order Details Tab -->
                                <div class="tab-pane fade" id="orders">
                               <div class="card">
                                  <div class="card-header">
                                      <h4>Merchant Orders</h4>
                                      <ul class="nav nav-tabs" id="orderTabs">
                                          <li class="nav-item">
                                              <a class="nav-link active" id="deposit-tab" data-bs-toggle="tab" href="#depositOrders">Deposit</a>
                                          </li>
                                          <li class="nav-item">
                                              <a class="nav-link" id="withdrawal-tab" data-bs-toggle="tab" href="#withdrawalOrders">Withdrawal</a>
                                          </li>
                                      </ul>
                                  </div>
                                  <div class="card-body tab-content" style="height: 50vh; overflow-y: auto;">
                                      <!-- Deposit Orders -->
                                      <div class="tab-pane fade show active" id="depositOrders">
                                          <label class="form-label">Order Type</label>
                                          <select class="form-select form-select-sm mb-2" onchange="marchentOrderList(${userID}, this.value)">
                                              <option value="">All</option>
                                              <option value="Pending">Pending</option>
                                              <option value="Complete">Complete</option>
                                          </select>
                                          <ul id="mrchOrderlist" class="list-group"></ul>
                                      </div>

                                      <!-- Withdrawal Orders -->
                                      <div class="tab-pane fade" id="withdrawalOrders">
                                          <label class="form-label">Order Type</label>
                                          <select class="form-select form-select-sm mb-2" onchange="filterOrders('withdrawal', this.value)">
                                              <option value="">All</option>
                                              <option value="Pending">Pending</option>
                                              <option value="Complete">Complete</option>
                                          </select>
                                          <ul id="withdrawalOrderList" class="list-group"></ul>
                                      </div>
                                  </div>
                              </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                `);

             

              if(data.onlineOffline==0){
                $("#onoff-deposit").prop('checked', false);
                $("#onOffText-deposit").html('Offline');
              }else{
                $("#onoff-deposit").prop('checked', true);
                $("#onOffText-deposit").html('Online');
              }
            }
        }else{
          //// //// applyMerchant//////////
          $("#view").html(`
            <div class="card" style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto;">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h2 class="mb-0">Become A Merchant</h2> 
                    <button onclick="closeWithdral()" type="button" class="btn-close"></button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Merchant Criteria for Platform Onboarding</h5>
                    <p class="card-text">
                        <strong>1. Eligibility Requirements</strong><br>
                        - Must be a legally registered entity or individual with valid identification.<br>
                        - Compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations.<br>
                        - Provide business registration documents and tax compliance certificates.<br><br>
        
                        <strong>2. Security Deposit Policy</strong><br>
                        - A security deposit will be frozen upon approval based on the merchant tier:<br>
                        &nbsp;&nbsp;• <strong>Regular:</strong> 600 USDT equivalent fiat<br>
                        &nbsp;&nbsp;• <strong>Pro:</strong> 1,200 USDT equivalent fiat<br>
                        &nbsp;&nbsp;• <strong>Diamond:</strong> 2,400 USDT equivalent fiat<br>
                        - This amount cannot be withdrawn during the merchant's active period on the platform.<br>
                        - The deposit serves as collateral for potential disputes, chargebacks, or penalties for policy violations.<br><br>
        
                        <strong>3. Trading and Transaction Standards</strong><br>
                        - Offer competitive pricing and maintain liquidity.<br>
                        - Ensure timely order fulfillment and minimal cancellation rates.<br>
                        - Adhere to platform guidelines for transaction handling and dispute resolution.<br><br>
        
                        <strong>4. Risk Management and Compliance</strong><br>
                        - Compliance with all regulatory requirements and platform policies.<br>
                        - Implementation of security measures to protect user data and funds.<br>
                        - Regular reporting and auditing to ensure transparency.<br><br>
        
                        <strong>5. Customer Service and Reputation</strong><br>
                        - Maintain a high customer satisfaction rating.<br>
                        - Provide responsive customer support and dispute resolution.<br>
                        - Uphold ethical practices and avoid fraudulent activities.<br><br>
        
                        <strong>6. Performance Monitoring</strong><br>
                        - Continuous evaluation of trading volume and order completion rate.<br>
                        - Adherence to platform’s Service Level Agreement (SLA).<br>
                        - Regular reviews and audits by the platform’s compliance team.<br><br>
        
                        <strong>7. Termination and Penalty Clause</strong><br>
                        - Violations of platform policies or regulatory compliance will result in penalties or termination.<br>
                        - The frozen security deposit may be used to cover losses or compensate affected users.<br><br>
        
                        By meeting these criteria, merchants can access a secure, transparent, and scalable trading environment.
                    </p>
                    <button id="merchantBecome" onclick="becomemerchant(${userID})" type="button" class="btn btn-secondary">
                        Become a Merchant
                    </button>
                </div>
            </div>
        `);
        
     
        }
    });
}


function becomemerchant(userID){
  $("#merchantBecome").attr('disabled','disabled');
  // $.post('/user/applyMerchant',{userID:userID},function(data){
  //   console.log(data);
  //   merchantInit(userID);
  // })
  $.get(`/user/getMerchantData/${userID}`, function (data) {
    console.log(data)
    $("#view").html(`
      <div class="card" style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto;">
          <div class="card-header d-flex justify-content-between align-items-center">
              <h2 class="mb-0">Apply as a Merchant</h2> 
              <button onclick="closeWithdral()" type="button" class="btn-close"></button>
          </div>
          <div class="card-body">
              <h5 class="card-title">Merchant Application Form</h5>
              <form id="merchantForm">
                  <label>Merchant Nickname:</label>
                  <input type="text" id="merchantNickname" class="form-control" value="${data.userName}" required><br>
  
                  <label>Merchant Type:</label>
                  <select id="merchantType" class="form-control" required>
                   <option value="Business">Business</option>
                      <option value="Individual">Individual</option>
                  </select><br>
  
                  <label>Business Name:</label>
                  <input type="text" id="businessName" class="form-control" required><br>
  
                  <label>Business License:</label>
                  <input type="text" id="businessLicense" class="form-control" required><br>
  
                  <label>Upload Business Document:</label>
                  <input type="file" id="businessDocument" class="form-control" required><br>
  
                  <label>Merchant Tier:</label><br>
                  <label><input type="radio" name="merchantTier" value="regular" checked> Regular - 600 USDT</label><br>
                  <label><input type="radio" name="merchantTier" value="pro"> Pro - 1200 USDT</label><br>
                  <label><input type="radio" name="merchantTier" value="diamond"> Diamond - 2400 USDT</label><br><br>
  
                  <label>Currency Symbol:</label>
                  <input type="text" id="currencySymbol" class="form-control" value="${data.currencySymbol}" required><br>
  
                  <label>Currency:</label>
                  <input type="text" id="currency" class="form-control" value="${data.currency}" required><br>
  
                  <label>Post Code:</label>
                  <input type="text" id="postCode" class="form-control" value="${data.kycDetails.postCode}" required><br>
  
                  <label>Address:</label>
                  <input type="text" id="address" class="form-control" value="${data.kycDetails.address1}, ${data.kycDetails.address2} , ${data.kycDetails.city} , ${data.kycDetails.country}" required><br>
  
                  <button type="button" onclick="submitMerchantApplication()" class="btn btn-secondary">
                      Apply as Merchant
                  </button>
              </form>
          </div>
      </div>
  `);
  
  })
}


const submitMerchantApplication = async (userID) => {
  let formData = new FormData();
  formData.append('userID', userID);
  formData.append('merchantNickname', $("#nickname").val());
  formData.append('merchantType', $("#merchantType").val());
  formData.append('businessName', $("#businessName").val());
  formData.append('merchantTier', $("#merchantTier").val());
  formData.append('totalDeposit', $("#totalDeposit").val());
  formData.append('currencySymbol', $("#currencySymbol").val());
  formData.append('currency', $("#currency").val());
  formData.append('postCode', $("#postCode").val());
  formData.append('address', $("#address").val());

  // File inputs
  formData.append('merchentDoc', $('#businessDoc')[0].files[0]);
  $.ajax({
      url: "/applymerchant",
      type: "POST",
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
          alert(response.message);
      },
      error: function(err) {
          alert("Error: " + err.responseJSON.error);
      }
  });
};

// function submitMerchantApplication(userID) {
//   const merchantData = new FormData();
//   merchantData.append("userID", `${userID}`);
//   merchantData.append("merchantNickname", $("#merchantNickname").val());
//   merchantData.append("merchantType", $("#merchantType").val());
//   merchantData.append("businessName", $("#businessName").val());
//   merchantData.append("businessLicense", $("#businessLicense").val());
//   merchantData.append("businessDocument", $("#businessDocument")[0].files[0]);
//   merchantData.append("merchantTier", $('input[name="merchantTier"]:checked').val());
//   merchantData.append("currencySymbol", $("#currencySymbol").val());
//   merchantData.append("currency", $("#currency").val());
//   merchantData.append("postCode", $("#postCode").val());
//   merchantData.append("address", $("#address").val());

//   $.ajax({
//       url: "/user/applyMerchant",
//       type: "POST",
//       data: merchantData,
//       processData: false,
//       contentType: false,
//       success: function(response) {
//           alert("Merchant application submitted successfully!");
         
//       },
//       error: function(error) {
//           alert("Error submitting application. Please try again.");
//       }
//   });
// }

function onlineOffline(userID){
  var  onoff=0;
  var aa=$("#onoff-deposit").prop('checked')
    
    if(aa){
      //////operation for true 
     //console.log("ture  onlone");
      onoff=1;
      $("#onOffText-deposit").html('Online');
    }else{
     // console.log("false  offline");
      onoff=0;
      $("#onOffText-deposit").html('Offline');
      
    }
  $.post('/user/onlineOfflinemMerchant',{userID:userID, onoff: onoff},function(data){

  });
}
  

  function mrchSavechanges(userID){
    var mrchTotalAmt =$("#mrchTotalAmt").val().trim();
    var mrchUsdtRate =$("#mrchUsdtRate").val().trim();
    var mrchOrderTime =$("#mrchOrderTime").val().trim();
    var mrchLimitFrom =$("#mrchLimitFrom").val().trim();
    var mrchLimitTo =$("#mrchLimitTo").val().trim();
    var mrchType =$("#mrchType").val().trim();
    $.post('/user/mrchSavechanges',{
      userID:userID,
      mrchTotalAmt:mrchTotalAmt,
      mrchUsdtRate:mrchUsdtRate,
      mrchOrderTime:mrchOrderTime,
      mrchLimitFrom:mrchLimitFrom,
      mrchLimitTo:mrchLimitTo,
      mrchType:mrchType
    },function(data){
      merchantInit(userID);
    });
    
   
  }

  function editMerchantNickname(userID){
    var newPasw = prompt("Enter Nick Name");
    $.post('/user/editmerchantNickname',{
      userID:userID,
      merchantNickName:newPasw
    },function(data){
      merchantInit(userID);
    });
  } 
  
  



  async function marchentOrderList(userID,type){
   // console.log(userID,type)
    $.post('/user/marchentOrderList',{
      userID:userID,
      type:type
    },async function(data){
      if(data.length >0){
        //console.log(data)
        $("#mrchOrderlist").html('')
       // data.forEach(async val  =>  {
          for(var i=0; i < data.length; i++ ){
          // console.log(data[i])
          //}
          //console.log(val);
          var val=data[i];
          await $.post('/user/getBankdetails',{userID:val.userID},function(bank){
           if(val.orderStatus=="Complete"){
            var IhaveTransfer='<span class="float-end" > <button type="button" class="btn btn-sm btn-success">Complete</button></span>';
           }else{
            var IhaveTransfer='<span class="float-end" > <button onclick="marchantOrdrtComplete('+val.OrderID+')" type="button" class="btn btn-sm btn-success">Tranfer Notify</button></span>';
           }
            switch (val.currency) {
              case "GBP":
                $("#mrchOrderlist").append('<li class="list-group-item mb-3" style="background-color: rgb(50, 63, 63); border: none;">\
                <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
                <span style="font-size: larger; color: #fffbfb;"> '+val.userName+' </span> &nbsp; \
                <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
                <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
                <span><i class="fa fa-clock-o" aria-hidden="true"></i> '+val.orderTime+' min</span>\
                <span class="float-end">Bank Transfer</span>\
                <br><span style="font-size: medium; color: #fffbfb;">Order ID: '+val.OrderID+'</span>\
                <br><span style="font-size: medium; color: #fffbfb;">'+val.currencySymbol+'  '+val.currencyRate+'</span>\
                '+IhaveTransfer+'\
                  <button onclick="openChat('+val.OrderID+')" class="btn btn-sm btn-primary">\
                 <i class="fa fa-comments" aria-hidden="true"></i> Chat\
                </button>\
                <br> Payble Amount <span style="color: #fffbfb;">'+val.currencySymbol+''+Number(val.marchantPaytoCust).toFixed(2)+'</span>\
               </p>\
              <div id="bankdetails'+val.OrderID+'" style="color: #f5efef; display: non;" >\
                <p>Name: '+val.userName+'<br>Account No: '+bank.accountNo+'<br>Sort Code: '+bank.sortCode+'<br>Branch: '+bank.branch+'<br>Bank Name: '+bank.bankName+'</p>\
              </div>\
            </li>')
              break;
              case "EUR":
                $("#mrchOrderlist").append('<li class="list-group-item mb-3" style="background-color: rgb(50, 63, 63); border: none;">\
                <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
                <span style="font-size: larger; color: #fffbfb;"> '+val.userName+' </span> &nbsp; \
                <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
                <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
                <span><i class="fa fa-clock-o" aria-hidden="true"></i> '+val.orderTime+' min</span>\
                <span class="float-end">Bank Transfer</span>\
                <br><span style="font-size: medium; color: #fffbfb;">Order ID: '+val.OrderID+'</span>\
                <br><span style="font-size: medium; color: #fffbfb;">'+val.currencySymbol+'  '+val.currencyRate+'</span>\
                '+IhaveTransfer+'\
                  <button onclick="openChat('+val.OrderID+')" class="btn btn-sm btn-primary">\
                 <i class="fa fa-comments" aria-hidden="true"></i> Chat\
                </button>\
                <br> Payble Amount <span style="color: #fffbfb;">'+val.currencySymbol+''+Number(val.marchantPaytoCust).toFixed(2)+'</span>\
               </p>\
              <div id="bankdetails'+val.OrderID+'" style="color: #f5efef; display: non;" >\
                <p>Name: '+val.userName+'<br>IBAN NO: '+bank.IBAN+'<br>Branch: '+bank.branch+'<br>Bank Name: '+bank.bankName+'</p>\
              </div>\
            </li>')
                
              break;
              case "INR":
                $("#mrchOrderlist").append('<li class="list-group-item mb-3" style="background-color: rgb(50, 63, 63); border: none;">\
                <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
                <span style="font-size: larger; color: #fffbfb;"> '+val.userName+' </span> &nbsp; \
                <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
                <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
                <span><i class="fa fa-clock-o" aria-hidden="true"></i> '+val.orderTime+' min</span>\
                <span class="float-end">Bank Transfer</span>\
                <br><span style="font-size: medium; color: #fffbfb;">Order ID: '+val.OrderID+'</span>\
                <br><span style="font-size: medium; color: #fffbfb;">'+val.currencySymbol+'  '+val.currencyRate+'</span>\
                '+IhaveTransfer+'\
                 <button onclick="openChat('+val.OrderID+')" class="btn btn-sm btn-primary">\
                 <i class="fa fa-comments" aria-hidden="true"></i> Chat\
                </button>\
                <br> Payble Amount <span style="color: #fffbfb;">'+val.currencySymbol+''+Number(val.marchantPaytoCust).toFixed(2)+'</span>\
               </p>\
              <div id="bankdetails'+val.OrderID+'" style="color: #f5efef; display: non;" >\
                <p>Name: '+val.userName+'<br>Account No: '+bank.accountNo+'<br>IFSC: '+bank.ifscCode+'<br>Branch: '+bank.branch+'<br>Bank Name: '+bank.bankName+'</p>\
              </div>\
            </li>')
              break;
              case "BDT":
                
                $("#mrchOrderlist").append('<li class="list-group-item mb-3" style="background-color: rgb(50, 63, 63); border: none;">\
                <p style="font-size: small; color: #797575 !important;" class="text-dark">\
                <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
                <span style="font-size: larger; color: #fffbfb;"> '+val.userName+' </span> &nbsp; \
                <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
                <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
                <span><i class="fa fa-clock-o" aria-hidden="true"></i> '+val.orderTime+' min</span>\
                <span class="float-end">Bank Transfer</span>\
                <br><span style="font-size: medium; color: #fffbfb;">Order ID: '+val.OrderID+'</span>\
                <br><span style="font-size: medium; color: #fffbfb;">'+val.currencySymbol+'  '+val.currencyRate+'</span>\
                '+IhaveTransfer+'\
                  <button onclick="openChat('+val.OrderID+')" class="btn btn-sm btn-primary">\
                 <i class="fa fa-comments" aria-hidden="true"></i> Chat\
                </button>\
                <br> Payble Amount <span style="color: #fffbfb;">'+val.currencySymbol+''+Number(val.marchantPaytoCust).toFixed(2)+'</span>\
               </p>\
              <div id="bankdetails'+val.OrderID+'" style="color: #f5efef; display: non;" >\
                <p>Name: '+val.userName+'<br>Account No: '+bank.accountNo+'<br>BranchDistrict Code: '+bank.branchDistrict+'<br>Branch: '+bank.branch+'<br>Bank Name: '+bank.bankName+'</p>\
              </div>\
            </li>')
              break;
              default:
              break;
            }
          
          })
          
        }
      }else{
        $("#mrchOrderlist").html('')
      }
      
     
    });
  }

  function openChat(orderID) {
    $("#chatModal").modal("show");
    $("#chatModalLabel").text("Chat for Order ID: " + orderID);
    
    // Load chat messages from server (Example API call)
    $.post("/chat/getMessages", { orderID }, function(data) {
        $("#chatMessages").html(""); // Clear previous messages
        data.forEach(msg => {
            $("#chatMessages").append(`<p><strong>${msg.sender}:</strong> ${msg.text}</p>`);
        });
    });
}

  function marchantOrdrtComplete(OrderID){
    $.post('/user/marchantOrdrtComplete',{OrderID:OrderID},function(data){
      if(data){
        //console.log(data)
         merchantInit(data.merchantuserID);
      }

    })

  }

  function footer(userID){
   // alert(userID)
    $("#footnav").css({"display":"block"});
    $("#footerBody").html('<div onclick=" homeBtnClick('+userID+')" style="text-align: center; font-size: small;" >\
      <i style="font-size: 30px;" class="fa fa-home" aria-hidden="true"></i>\
      <br>Home\
    </div>\
    <div onclick="transactionHistoryInit('+userID+')" style="text-align: center; font-size: small;" >\
      <i style="font-size: 30px;" class="fa fa-file-text" aria-hidden="true"></i>\
      <br>Transaction\
    </div>\
    <div onclick="crrencyBtnClick('+userID+')"  style="text-align: center; font-size: small;" >\
      <i style="font-size: 30px;" class="fa fa-btc" aria-hidden="true"></i>\
      <br>Currency\
    </div>\
    <div onclick="settingBtnClick('+userID+')"  style="text-align: center; font-size: small;" >\
      <i style="font-size: 30px;" class="fa fa-cog" aria-hidden="true"></i>\
      <br>Setting\
    </div>\
    <div onclick="helpBtnClick('+userID+')"  style="text-align: center; font-size: small;" >\
      <i style="font-size: 30px;" class="fa fa-life-ring" aria-hidden="true"></i>\
      <br>Help\
    </div>');

    
    
  }

  function homeBtnClick(userID){
    $("#view").css({"display":"block"});
    $("#topBacground").css({"display":"block"});
    $("#view1").css({"display":"none"});
    getUserprofile(userID);
  }

  function transactionHistoryInit(userID){
    $("#view1").css({"display":"block"});
    $("#view").css({"display":"none"});
    $("#topBacground").css({"display":"none"});
   
    $("#view1").html('<div class="card" style="background-color: rgb(78, 83, 83); color: antiquewhite;">\
      <div class="card-header">\
      <button onclick="closeFooterbtn()" type="button" class="btn-close float-end"></button>\
          <h3>Transaction</h3>\
          <div class="row">\
            <div class="col">\
              <input id="dateFrm" type="date" class="form-control" value="'+datefoinput()+'">\
          </div>\
          <div class="col">\
            <input id="dateTo" type="date" class="form-control" value="'+datefoinput()+'">\
          </div>\
          </div>\
          <div class="text-align">\
            <button onclick="getTransactionHistory('+userID+')" class="btn btn-warning btn-sm mt-3 ">Submit</button>\
            <span></span>\
          </div>\
      </div>\
      <div class="card-body">\
      <p id="transactionTitle" class="text-center"> </p>\
        <ol id="transactionHistory" style="height: 60vh; overflow-y: auto;" class="list-group list-group-numbered list-group-item-dark">\
        </ol>\
       </div>\
     </div> ')

  }

  function closeFooterbtn(){
    $("#view").css({"display":"block"});
    $("#topBacground").css({"display":"block"});
    $("#view1").css({"display":"none"});
  }
  function getTransactionHistory(userID){
    var dateFrm=$("#dateFrm").val();
    var dateTo = $("#dateTo").val();
    $.post('/user/getTransactionHistory',{userID:userID,dateFrm:dateFrm,dateTo:dateTo},function(data){
        if(data.length > 0){
          $("#transactionTitle").html('Date From: '+dateFrm+',   To : '+dateTo+'')
          $("#transactionHistory").html('')
          data.forEach(val => {
            var amt=0
            if(val.transactionType=="Deposit"){
              amt=val.depositFaitAmount;
            }else{
              amt=val.withdralFaitAmount;
            }
            $("#transactionHistory").append('<li class="list-group-item d-flex justify-content-between align-items-start mb-2">\
        <div class="ms-2 me-auto">\
          <div class="fw-bold">'+val.transactionType+'</div>\
          Txtd:'+val.trasactionID+'<br>To: '+val.userNameTo+'<br>From: '+val.userNameFrom+'<br>Date: '+dateFormat(new Date(val.date),"dt")+'<br>Remarks: '+val.remarks+'\
        </div>\
        <span class="badge text-bg-primary rounded-pill">'+val.fiatCurrency+' '+Number(amt).toFixed(2)+'</span>\
        </li>');
          });

        }else{
          $("#transactionTitle").html('Date From: '+dateFrm+',   To : '+dateTo+'')
          $("#transactionHistory").html('')
          $("#transactionHistory").append('<li  class="list-group-item d-flex justify-content-between align-items-start mb-2">\
        No Histroy\
        </li>');
        }
    });
  }

  function crrencyBtnClick(userID){
    $("#view1").css({"display":"block"});
    $("#view").css({"display":"none"});
    $("#topBacground").css({"display":"none"});
    $("#view1").html('<div class="card" style="background-color: rgb(78, 83, 83); color: antiquewhite;">\
      <div class="card-header">\
      <button onclick="closeFooterbtn()" type="button" class="btn-close float-end"></button>\
          <h3>My Currency</h3>\
      </div>\
      <div class="card-body">\
        <ol id="mycurrencyHistory" style="height: 70vh; overflow-y: auto;" class="list-group list-group-numbered list-group-item-dark">\
        </ol>\
       </div>\
     </div> ')
    $.post('/user/mycurrencyHistory',{userID:userID},function(data){
      if(data.length > 0){
        
        
        



        $("#mycurrencyHistory").html('');
        data.forEach(val => {
          var balance= Number(val.lastcheckBalance) - Number(val.frzeeFiatAmount);
          var balanceUsdt= Number(val.lastCheckUsdtAmount) - Number(val.frzeeUsdtAmount);
          $("#mycurrencyHistory").append('<li class="list-group-item d-flex justify-content-between align-items-start mb-2">\
          <div class="ms-2 me-auto">\
            <div class="fw-bold">Currency : '+val.currency+'</div>\
            Frozen Amount : '+val.currencySymbol+' '+Number(val.frzeeFiatAmount).toFixed(2)+' <br>USDT: '+Number(val.frzeeUsdtAmount).toFixed(2)+'<br>Total Balance : '+val.currencySymbol+' '+Number(val.lastcheckBalance).toFixed(2)+' <br>USDT: '+Number(val.lastCheckUsdtAmount).toFixed(2)+'\
          </div>\
          <span class="badge text-bg-primary rounded-pill">'+val.currencySymbol+' '+Number(balance).toFixed(2)+' <br>USDT: '+Number(balanceUsdt).toFixed(2)+'</span>\
          </li>');
        });

      }
      console.log(data)
    })
   
    
  }

  function settingBtnClick(userID){
    $("#view1").css({"display":"block"});
    $("#view").css({"display":"none"});
    $("#topBacground").css({"display":"none"});
   
    $("#view1").html('<div class="card" style="background-color: rgb(78, 83, 83); color: antiquewhite;">\
      <div class="card-header">\
      <button onclick="closeFooterbtn()" type="button" class="btn-close float-end"></button>\
          <h3>Setting</h3>\
      </div>\
      <div class="card-body">\
       <ul class="list-group mt-3">\
        <li class="list-group-item" onclick="SetPin('+userID+')" >Set / Re-set T-Pin</li>\
        </ul>\
       </div>\
     </div> ')
  }

function SetPin(userID){
  closeFooterbtn()
  setResetTpin(userID)
}

  function helpBtnClick(userID){
    $("#view1").css({"display":"block"});
    $("#view").css({"display":"none"});
    $("#topBacground").css({"display":"none"});
   
    $("#view1").html('<div class="card" style="background-color: rgb(78, 83, 83); color: antiquewhite;">\
      <div class="card-header">\
      <button onclick="closeFooterbtn()" type="button" class="btn-close float-end"></button>\
          <h3>Help</h3>\
      </div>\
      <div class="card-body">\
      <p class="text-center">Contact Us : support@paacryptobank.com</p>\
       </div>\
     </div> ')
  }

  function datefoinput(){  
    var date=new Date();
    var year=date.getFullYear();  
    var month=date.getMonth() + 1; 
    var day=date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    if(month < 10){
      month=('0'+month+'')
    }
    if(day < 10){
      day=('0'+day+'')
    }
      return ''+year+'-'+month+'-'+day+''
  }


  function paymethodInit(userID){
    $.post('/user/getUser',{userID:userID},function(user){
      if(user){
        $("#topBacground").css({"display":"none"});
        switch (user.currency) {
          case "GBP":
            $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
            <div class="card-header">\
              <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
             <h2>Add Payment Method</h2> \
            </div>\
          <div class="card-body">\
              <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Account No:</label>\
              <input type="text" class="form-control" id="gbpBankAccountNo">\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Sort Code:</label>\
              <input type="text" class="form-control" id="gbpsortCode" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Name:</label>\
              <input type="text" class="form-control" id="gbpbankName" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Branch / Address:</label>\
              <input type="text" class="form-control" id="gbpbranchName" >\
            </div>\
            <div class="mb-3">\
            <button onclick="addBank(\'GBP\',\''+userID+'\')" type="button" class="btn btn-primary">Submit</button>\
            </div>\
              </div>\
            </div>')

          break;  

          case "INR":
            $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
            <div class="card-header">\
              <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
             <h2>Add Payment Method</h2> \
            </div>\
          <div class="card-body">\
              <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Account No:</label>\
              <input type="text" class="form-control" id="inrbankAccountNo">\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">IFSC Code:</label>\
              <input type="text" class="form-control" id="inrIfscCode" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Name:</label>\
              <input type="text" class="form-control" id="inrbankName" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Branch / Address:</label>\
              <input type="text" class="form-control" id="inrbranchName" >\
            </div>\
            <div class="mb-3">\
            <button onclick="addBank(\'INR\',\''+userID+'\')" type="button" class="btn btn-primary">Submit</button>\
            </div>\
              </div>\
            </div>')
          break;  

          case "BDT":
            $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
            <div class="card-header">\
              <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
             <h2>Add Payment Method</h2> \
            </div>\
          <div class="card-body">\
              <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Account No:</label>\
              <input type="text" class="form-control" id="bdtbankAccountNo">\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Distric Code:</label>\
              <input type="text" class="form-control" id="bdtdistricCode" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Name:</label>\
              <input type="text" class="form-control" id="bdtbankName" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Branch / Address:</label>\
              <input type="text" class="form-control" id="bdtbranchName" >\
            </div>\
            <div class="mb-3">\
            <button onclick="addBank(\'BDT\',\''+userID+'\')" type="button" class="btn btn-primary">Submit</button>\
            </div>\
              </div>\
            </div>')

          break; 

          case "EUR":
            $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
            <div class="card-header">\
              <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
             <h2>Add Payment Method</h2> \
            </div>\
          <div  class="card-body">\
              <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">IBAN:</label>\
              <input type="text" class="form-control" id="euribanNo">\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Bank Name:</label>\
              <input type="text" class="form-control" id="eurbankName" >\
            </div>\
            <div class="mb-3">\
              <label for="exampleInputText1" class="form-label">Branch / Address:</label>\
              <input type="text" class="form-control" id="eurbranchName" >\
            </div>\
            <div class="mb-3">\
            <button onclick="addBank(\'EUR\',\''+userID+'\')" type="button" class="btn btn-primary">Submit</button>\
            </div>\
              </div>\
            </div>')

          break; 
          default:
           break;
        } 
          
      }
    })
  }


  function addBank(currency,userID){
    var bankName = "";
    var accountNo = "";
    var ifscCode = "";
    var branch = "";
    var branchDistrict = "";
    var sortCode = "";
    var IBAN = "";
    switch (currency) {
      case "GBP":
        var accountNo =$("#gbpBankAccountNo").val().trim();
        var sortCode =$("#gbpsortCode").val().trim();
        var bankName =$("#gbpbankName").val().trim();
        var branch =$("#gbpbranchName").val().trim();
        $.post('/user/updatePaymentMethod',{
        userID:userID,
        paymentMethod:"Bank Transfer",
        currency:currency,
        bankName:bankName,
        accountNo:accountNo,
        ifscCode:"",
        branch:branch,
        branchDistrict:"",
        sortCode:sortCode,
        IBAN:""
        },function(user){
          paysuccess();
        });
      break; 
      case "EUR":
        var IBAN =$("#euribanNo").val().trim();
        var bankName =$("#eurbankName").val().trim();
        var branch =$("#eurbranchName").val().trim();
        $.post('/user/updatePaymentMethod',{
          userID:userID,
          paymentMethod:"Bank Transfer",
          currency:currency,
          bankName:bankName,
          accountNo:accountNo,
          ifscCode:"",
          branch:branch,
          branchDistrict:"",
          sortCode:"",
          IBAN:IBAN
        },function(user){
          paysuccess();
        });
      break;
      case "INR":
        var accountNo =$("#inrbankAccountNo").val().trim();
        var ifscCode =$("#inrIfscCode").val().trim();
        var bankName =$("#inrbankName").val().trim();
        var branch =$("#inrbranchName").val().trim();
        $.post('/user/updatePaymentMethod',{
          userID:userID,
          paymentMethod:"Bank Transfer",
          currency:currency,
          bankName:bankName,
          accountNo:accountNo,
          ifscCode:ifscCode,
          branch:branch,
          branchDistrict:"",
          sortCode:"",
          IBAN:""
        },function(user){
          paysuccess();
        });
      break; 
      case "BDT":
        var accountNo =$("#bdtbankAccountNo").val().trim();
        var branchDistrict =$("#bdtdistricCode").val().trim();
        var bankName =$("#bdtbankName").val().trim();
        var branch =$("#bdtbranchName").val().trim();
        $.post('/user/updatePaymentMethod',{
          userID:userID,
          paymentMethod:"Bank Transfer",
          currency:currency,
          bankName:bankName,
          accountNo:accountNo,
          ifscCode:"",
          branch:branch,
          branchDistrict:branchDistrict,
          sortCode:"",
          IBAN:""
        },function(user){
          paysuccess();
        });
      break;
      default:
      break;  
    }
  }

  function paysuccess(){
    $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
    <div class="card-header">\
      <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
    <h2>Add Payment Method</h2> \
    </div>\
  <div  class="card-body">\
   <p>Payment Method Successfully Added</p>\
  </div>\
</div>');
  }


  function orderDetails(userID,orderType){
    $.post('/user/orderList',{
      userID:userID,
      orderType:orderType
    },function(data){
      if(data.length > 0){
        $("#topBacground").css({"display":"none"});
        $("#view").html(' <div class="card"  style="margin-top: 10vh; margin-bottom: 10vh; height: 80vh; overflow-y: auto; ">\
      <div class="card-header">\
        <button onclick="closeWithdral()" type="button" class="btn-close float-end"></button>\
      <h2>Order</h2> \
      <div class="row">\
          <div class="col">\
              <span>Pending</span>\
          </div>\
          <div class="col">\
              <span>Cancel</span>\
          </div>\
          <div class="col">\
              <span>Complete</span>\
          </div>\
      </div>\
      </div>\
      <div  class="card-body">\
      <ul id="userOrderList" class="list-group" style="background-color: #093b2c !important; overflow-y: auto;">\
      </ul>\
      </div>\
      </div>');

        data.forEach(val => {
          //console.log(val)
          $("#userOrderList").append('<li class="list-group-item" aria-current="true" style="height: 23vh; background-color: rgb(50, 63, 63); border: none;">\
          <p style="font-size: small; color: #797575 !important;" class="text-dark">\
              <span><i class="fa fa-user-circle" aria-hidden="true"></i></span> &nbsp; \
              <span style="font-size: larger; color: #fffbfb;"> '+val.merchantNickname+' </span> &nbsp;\
              <span style="color: #f1de0b;"><i class="fa fa-check-square" aria-hidden="true"></i></span>\
              <br><span><i class="fa fa-hand-pointer-o" aria-hidden="true"></i> 100%</span> &nbsp; \
              <span><i class="fa fa-clock-o" aria-hidden="true"></i> '+val.orderTime+' min</span>\
              <span class="float-end">'+val.merchantType+' </span>\
              <br> <span style="color: #fffbfb;"> Order ID : '+val.OrderID+'</span>\
              <br> Payble Amount <span style="color: #fffbfb;">'+val.currencySymbol+''+val.marchantPaytoCust+'</span>\
              <br> Currceny Rate <span style="color: #fffbfb;">'+val.currencySymbol+''+val.currencyRate+'</span>\
              <br> Order Amount <span style="color: #fffbfb;">'+val.currencySymbol+''+val.orderAmount+'</span>\
              <br><div class="float-end"> <span style="color: #fffbfb;">Time : 0:0:0</span>\
              </div> \
              <input type="hidden" id="f" value="1">\
            </p>\
      </li>')
        });
      }
      
    });

  }


  function copyContent(content){
    navigator.clipboard.writeText(content);
  }

  function desebleSubmitBtn(){
    $("#kycsubmitArea").html('<img style="height: 30px; width: 30px;" src="/images/gif/progress.gif">')
  }

  function depositSubmit(){
    $("#fundButton").html('<img style="height: 30px; width: 30px;" src="/images/gif/progress.gif">')
  }

  function protectButton(id){
    $("#"+id+"").html('<img style="height: 30px; width: 30px;" src="/images/gif/progress.gif">')
  }

  

  
 
  


  






  

  
  