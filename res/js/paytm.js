function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.visibility = 'visible';
    }
    else document.getElementById('ifYes').style.visibility = 'hidden';
}

//Form Handling With Events
var checks;
var strEvents = "";
var amountToPay=0;
var paid=false;
function selectEvents() {
  strEvents= "";
  amountToPay = 0;
  paid=false;
  var checks = document.getElementsByClassName('event_checks');
  for(i=0; i<18; i++)
  {
      switch(checks[i].checked)
      {
          case true:
              strEvents = strEvents + checks[i].name+", ";
              //strEvents.concat(getEventName(i));
              //strEvents.concat(checks[i].name, ", ");
              var amt = parseInt(checks[i].value);
              amountToPay += amt;           
              break;
      }
  }
  //strEvents.slice(0,-2);
  //window.alert(amountToPay);
  //document.getElementById('amountLabel').innerHTML="Total Amount: "+amountToPay;
  //document.getElementById('eventBill').value = amountToPay;
  //document.getElementById('eventList').innerHTML="Events Selected : "+strEvents;
  document.getElementById('eventList').value="Events Selected : "+strEvents+"\nBill : "+amountToPay;
}

//Send Transaction data to Teknothon
function sendData()
{
     //var payThruPaytm = document.getElementById('paytmRadio').checked;
     //var payThruCash = document.getElementById('cashRadio').checked;
     /*if(payThruPaytm){
        document.getElementById('paytm_id').visibility = "visible";
        document.getElementById('cash_id').visibility = "hidden";
     } 
     if(payThruCash) {
        document.getElementById('paytm_id').visibility = "hidden";
        document.getElementById('cash_id').visibility = "visible";
     }*/
    //$('#getModal').style('data-target','#modal_cash');
    //$('#getModal').target('#modal_cash');
   
   selectEvents();
   
   //document.getElementById('getModal').style.data-target = "block";
   document.getElementById('modalLabel').innerHTML = "To Pay : "+amountToPay;
   document.getElementById('modalLabelcash').innerHTML = "To Pay : "+amountToPay;
   //document.getElementById('eventList').value = strEvents;
   paid=true;
}

function changePC()
{
    // document.getElementsByName('paytm_id').visibility="hidden";
    // document.getElementsByName('paytm_id').style.id="paytm_id";
    // document.getElementsByName('cash_id').style.id="modal_id";
    $('#paytm_id').hide;
}
function changeCP()
{
    document.getElementById('modal_id').style.id="cash_id";
    document.getElementById('paytm_id').style.id="modal_id";
}



