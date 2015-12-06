/**
 * Created by Lever on 2015/11/24.
 */
app.controller('ColorCodeCtrl', ['$scope', function($scope){
    $scope.componentToHex = function(num){
        if(num){
            num = parseInt(num);
            var hex = num.toString(16); //num必须是Number类型 否则不起作用
            return hex.length === 1 ? '0' + hex : hex;//因为转换过后的值应该是两位的。
        }
    };

    $scope.rgbToHex = function(){
        $scope.hex = $scope.componentToHex($scope.red) + $scope.componentToHex($scope.green) + $scope.componentToHex($scope.blue);
    };
    $scope.hexToRgb = function(){
        var result = /([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        if($scope.hex){
            var resultColor = result.exec($scope.hex);
            if(resultColor){
                $scope.red = parseInt(resultColor[1],16);
                $scope.green = parseInt(resultColor[2],16);
                $scope.blue = parseInt(resultColor[3],16);
            }
        }
    };

}]);