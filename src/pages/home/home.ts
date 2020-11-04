import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var RazorpayCheckout: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  paymentAmount: number = 90;
  currency: string = 'INR';
  currencyIcon: string = '₹';
  razor_key = 'rzp_test_GKHZTibe8E5iPx';
  cardDetails: any = {};

  constructor(public navCtrl: NavController) {

  }

   payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency,
      key: this.razor_key,      
      amount: this.paymentAmount,      
      order_id:"order_Fx729Wb9cNLaYa",
      name: 'ESME Digital Solutions Private Limited ',
      handler: function (response){         
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
      prefill: {
        //email: 'niladri@passionbiz.co.uk',
        //contact: '9836090070',
        //name: 'Niladri'
      },
      theme: {
        color: '#F37254'
      }, 
      
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

     var successCallback = function (payment_id) {
      alert('Success for payment_id: ' + payment_id);      
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
      
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
    //RazorpayCheckout.on('payment.success', successCallback)
    //RazorpayCheckout.on('payment.cancel', cancelCallback)
    //RazorpayCheckout.open(options)
    

}
/*payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: this.currency, // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'foo',
      prefill: {
        email: 'admin@enappd.com',
        contact: '9621323231',
        name: 'Enappd'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }*/

}
