/**
 * Created by hxsd on 2016/4/22.
 */
var arrOperateItem = [];
var flag = 0;
window.onload = function () {
    showNum();
    clearNum();
    doOperator(arrOperateItem);
    calc(arrOperateItem);
};

function showNum() {
    var arrNum = document.getElementsByClassName("num_btn");  //shuan
    var res = document.getElementById("res");   //wen
    for(var i = 0; i < arrNum.length; i++){
        arrNum[i].onclick = function () {
            //alert(flag);
            if (flag == 1){        //1表是不拼接
                res.value = this.innerText;
            }else {
                if (res.value.charAt(0) != "0"){       //
                    res.value += this.innerText;
                }else {
                    res.value = this.innerText;
                }
            }

           flag = 0;

        }
    }
}
function clearNum() {
    var myC = document.getElementById("clear_res");
    var myD = document.getElementById("delete_last_num");
    myC.onclick = function () {
        document.getElementById("res").value = "0";
    };
    myD.onclick = function () {
        var str = document.getElementById("res").value;
        str = str.substring(0,str.length -1);
        if(str.length == 0){
            str = "0";
        }
        document.getElementById("res").value = str;
    };
    //alert(arr.join);

}

function doOperator(arr) {
    var  operators = document.getElementsByClassName("operator");

    for (var i = 0; i < operators.length; i++){
        operators[i].onclick = function () {

            var item = document.getElementById("res");
            arr.push(item.value);
            //alert(arr.join());
            arr.push(this.innerText);
            //alert(arr.join());
            //item.value = "";
            flag = 1;
        };
    }
}

function calc(arr) {
    var equal = document.getElementById("equal");
    equal.onclick = function () {
        var item = document.getElementById("res");
        arr.push(item.value);
        //alert(arr.length);
        //alert(arr.join());
        var num1 = parseFloat(arr[0]);
        var num2 = parseFloat(arr[2]);
        var res = null;
        switch (arr[1]){
            case "+" :
                res = num1 + num2;
                break;
            case "-" :
                res = num1 - num2;
                break;
            case "*" :
                res = num1 * num2;
                break;
            case "/" :
                res = num1 / num2;
                break;
            default :
        }
        item.value = res;
        //alert(arr.join());
        arr.length = 0;
        //alert(arr.length);
        flag = 0;
    };
    //arr = [];
}

