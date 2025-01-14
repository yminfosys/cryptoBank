$( document ).ready(function() {
    var allredyloginuserID=$("#allredyloginuserID").val();
    if(allredyloginuserID){
    //   getUserprofile(allredyloginuserID);
    verifyNow(allredyloginuserID)
    
        
    }else{
        window.location.href = "/user";
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


function verifyNow(userID){
   
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