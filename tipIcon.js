.directive('tipIcon', [function() {
  
  return {
     restrict: 'A',
     template: '<i class="fa fa-question-circle fa-lg tips" ng-mouseover="showTxt()" ng-mouseout="hideTxt()"></i><div class="txtHold hide" id="{{tipId}}">{{tipTxt}}</div>',
     scope: {
            tipId: '@', 
            tipTxt: '@'
     },
     link: function(scope,element,attrs){ 
       //commment
       scope.showTxt = function(scope, element){
         var off = $("#" + attrs.tipId).offset();

         //document.querySelectorAll('[tip-icon]').style.right = "20px";
         
         var thetip = ($("#" + attrs.tipId));
         //$(thetip).style.left = "off.left + 20px";
         $("#" + attrs.tipId).removeClass("hide");
       }
       scope.hideTxt = function(scope, element){
          $(".txtHold").addClass("hide");
       }
      
    }
  }
}]);