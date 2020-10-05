export function reverceStr(innerStr){
    let outStr ='';
    if(typeof(innerStr) !== 'undefined'){
        for (let i = 0; i < innerStr.length; i+=1 ){
            outStr += innerStr[innerStr.length-1-i];
        }
        return outStr;
    }
    else{
        return "undefinedGrr";
    }
}
