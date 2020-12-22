/**
 * Do the clicking stuff
 *
 */

(function() {
    const cards = document.querySelectorAll(".card.effect__click");
    for ( let i  = 0, len = cards.length; i < len; i++ ) {
      let card = cards[i];
      clickListener( card );
    }
  
    function clickListener(card) {
      card.addEventListener( "click", function() {
        const c = this.classList;
        c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      });
    }
  })();
  
  /**
   * Do the random stuff
   *
   */
  
//   (function() {
  
//     // cache vars
//     var cards = document.querySelectorAll(".card.effect__random");
//     var timeMin = 1;
//     var timeMax = 3;
//     var timeouts = [];
  
//     // loop through cards
//     for ( var i = 0, len = cards.length; i < len; i++ ) {
//       var card = cards[i];
//       var cardID = card.getAttribute("data-id");
//       var id = "timeoutID" + cardID;
//       var time = randomNum( timeMin, timeMax ) * 1000;
//       cardsTimeout( id, time, card );
//     }
  
//     // timeout listener
//     function cardsTimeout( id, time, card ) {
//       if (id in timeouts) {
//         clearTimeout(timeouts[id]);
//       }
//       timeouts[id] = setTimeout( function() {
//         var c = card.classList;
//         var newTime = randomNum( timeMin, timeMax ) * 1000;
//         c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
//         cardsTimeout( id, newTime, card );
//       }, time );
//     }
  
//     // random number generator given min and max
//     function randomNum( min, max ) {
//       return Math.random() * (max - min) + min;
//     }
  
//   })();
//   (function(){
//     var fusoionad_script = document.createElement('script');
//     fusoionad_script.type = 'text/javascript';
//     fusoionad_script.async = true;
//     fusoionad_script.id = "_fusionads_js";
//     fusoionad_script.src = '//cdn.fusionads.net/fusion.js?zoneid=1332&serve=C6SDP2Y&placement=callmenickcom';
//     document.body.appendChild(fusoionad_script);
//   })();