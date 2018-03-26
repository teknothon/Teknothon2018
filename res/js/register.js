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
  for(i=0; i<14; i++)
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
function noEventSelected() 
{
    var eventSelected=false;
    var checks = document.getElementsByClassName('event_checks');
    for(i=0; i<14; i++)
    {
        switch(checks[i].checked)
        {
            case true: 
                eventSelected=true;  
                break;
        }
    }
    return !eventSelected; //return true if no event selected
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
    $('#cashSubmit').click(function(){
        $('#cash_id').hide();
    })
    $('#txnButton').click(function(){
        $('#paytm_id').hide();
    })
     
   selectEvents();
   
   //document.getElementById('getModal').style.data-target = "block";
   document.getElementById('modalLabel').innerHTML = "To Pay : "+amountToPay;
   document.getElementById('BILL').value = amountToPay;
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

function submission(){
    var frm = $('#gform').valid();
    var txn = $('#transaction').valid();
    if(frm && txn){
        frm.submit();
        $("#thankyou_message").show();
    }
    else {
        $('#txn').focus();
    }
}
