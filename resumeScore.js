.directive('resumeScore', [function () {
        var uniqueCount = 0;
        var uniqueBgCount = 0;
        var unique = 'canvas' + uniqueCount;
        var uniqueBg = 'bgCan' + uniqueBgCount;
        return {
            restrict: 'A',
            scope: true,
            template: '<div class="canvasHold" id="{{::resHold}}">' + 
                            '<canvas id="{{::uniqueBg}} width="70" height="70"></canvas>' + 
                            '<canvas id="{{::unique}}" width="70" height="70"></canvas>' +
                      '</div>',
            link: function (scope, iElement, iAttrs) {

                scope.newCount = uniqueCount;
                scope.unique = 'canvas' + uniqueCount++;
                scope.uniqueBg = 'bgCan' + uniqueBgCount++;

                var canvasHold = document.getElementsByClassName("canvasHold");
                //fgCan = foreground canvas contains the blue bars - has z-index of 1
                var fgCan = canvasHold[scope.newCount].firstChild;
                var context = fgCan.getContext('2d');
                    context.lineWidth = 10;
                    context.strokeStyle = "rgb(87, 154, 166)";
                //bgCan = background canvas contains the grey bars that are shown on default - has z-index of 0
                var bgCan = canvasHold[scope.newCount].lastChild;
                var bgCtx = bgCan.getContext("2d");
                    bgCtx.lineWidth = 10;
                    bgCtx.strokeStyle = "rgb(174, 169, 169)";
                
            
                //draw all scores in grey to show range of scores 
                //bgCtx has z-index = 0
                var drawBackground = function () {
                        //console.log('index: ' + iElement.length);
                        bgCtx.moveTo(10, 70);
                        bgCtx.lineTo(10, 62);
                        bgCtx.moveTo(23, 70);
                        bgCtx.lineTo(23, 54);
                        bgCtx.moveTo(36, 70);
                        bgCtx.lineTo(36, 44);
                        bgCtx.moveTo(49, 70);
                        bgCtx.lineTo(49, 34);
                        bgCtx.moveTo(62, 70);
                        bgCtx.lineTo(62, 24);
                        bgCtx.stroke();
                    }
                    //draw score in blue to show actual resume score
                    //context has z-index = 1
                var drawScore = function (resScore) {
                        if (resScore === 1) {
                            rScore = 1;
                            console.log('score: ' + rScore);
                            context.moveTo(10, 70);
                            context.lineTo(10, 62);
                        } else if (resScore === 2) {
                            rScore = 2;
                            console.log('score: ' + rScore);
                            context.moveTo(10, 70);
                            context.lineTo(10, 62);
                            context.moveTo(23, 70);
                            context.lineTo(23, 54);
                        } else if (resScore === 3) {
                            rScore = 3;
                            console.log('score: ' + rScore);
                            context.moveTo(10, 70);
                            context.lineTo(10, 62);
                            context.moveTo(23, 70);
                            context.lineTo(23, 54);
                            context.moveTo(36, 70);
                            context.lineTo(36, 44);
                        } else if (resScore === 4) {
                            rScore = 4;
                            console.log('score: ' + rScore);
                            context.moveTo(10, 70);
                            context.lineTo(10, 62);
                            context.moveTo(23, 70);
                            context.lineTo(23, 54);
                            context.moveTo(36, 70);
                            context.lineTo(36, 44);
                            context.moveTo(49, 70);
                            context.lineTo(49, 34);
                        } else if (resScore === 5) {
                            rScore = 5;
                            console.log('score: ' + rScore);
                            context.moveTo(10, 70);
                            context.lineTo(10, 62);
                            context.moveTo(23, 70);
                            context.lineTo(23, 54);
                            context.moveTo(36, 70);
                            context.lineTo(36, 44);
                            context.moveTo(49, 70);
                            context.lineTo(49, 34);
                            context.moveTo(62, 70);
                            context.lineTo(62, 24);
                        }
                        context.stroke();
                    }
                    //show the maximum range 
                drawBackground();
                //@param = int range 5
                drawScore(3);
            }
        };
    }])