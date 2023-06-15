# UNIT-CONVERTER
var input= document.getElementById('input');
var result= document.getElementById('result');
var inputType= document.getElementById('inputType');
var resultType= document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue == "meter" && resultTypeValue=="kilometer"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue == "meter" && resultTypeValue=="Centimeter"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue == "meter" && resultTypeValue=="inch"){
        result.value = Number(input.value) * 39.26;
    }else if(inputTypeValue == "meter" && resultTypeValue=="feet"){
        result.value = Number(input.value) * 3.281;
    }else if(inputTypeValue == "meter" && resultTypeValue=="meter"){
        result.value = input.value;
    }

    if(inputTypeValue == "kilometer" && resultTypeValue=="meter"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue == "kilometer" && resultTypeValue=="Centimeter"){
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue == "kilometer" && resultTypeValue=="inch"){
        result.value = Number(input.value) * 39370;
    }else if(inputTypeValue == "kilometer" && resultTypeValue=="feet"){
        result.value = Number(input.value) * 3280.84;
    }else if(inputTypeValue == "kilometer" && resultTypeValue=="kilometer"){
        result.value = input.value;
    }

    if(inputTypeValue == "Centimeter" && resultTypeValue=="kilometer"){
        result.value = Number(input.value)/100000;
    }else if(inputTypeValue == "Centimeter" && resultTypeValue=="meter"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue == "Centimeter" && resultTypeValue=="inch"){
        result.value = Number(input.value) * 0.393701;
    }else if(inputTypeValue == "Centimeter" && resultTypeValue=="feet"){
        result.value = Number(input.value) * 0.0328084;
    }else if(inputTypeValue == "Centimeter" && resultTypeValue=="Centimeter"){
        result.value = input.value;
    }

    if(inputTypeValue == "feet" && resultTypeValue=="kilometer"){
        result.value = Number(input.value) * 0.000305;
    }else if(inputTypeValue == "feet" && resultTypeValue=="meter"){
        result.value = Number(input.value) * 0.304;
    }else if(inputTypeValue == "feet" && resultTypeValue=="inch"){
        result.value = Number(input.value) * 12;
    }else if(inputTypeValue == "feet" && resultTypeValue=="Centimeter"){
        result.value = Number(input.value) * 30.48;
    }else if(inputTypeValue == "feet" && resultTypeValue=="feet"){
        result.value = input.value;
    }

    if(inputTypeValue == "inch" && resultTypeValue=="kilometer"){
        result.value = Number(input.value) * 2.54E-5;
    }else if(inputTypeValue == "inch" && resultTypeValue=="meter"){
        result.value = Number(input.value) * 0.0254;
    }else if(inputTypeValue == "inch" && resultTypeValue=="feet"){
        result.value = Number(input.value) / 12;
    }else if(inputTypeValue == "inch" && resultTypeValue=="Centimeter"){
        result.value = Number(input.value) * 2.54;
    }else if(inputTypeValue == "inch" && resultTypeValue=="inch"){
        result.value = input.value;
    }
}
