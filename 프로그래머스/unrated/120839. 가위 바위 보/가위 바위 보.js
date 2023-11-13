function winner(a){
    switch(a){
        case "2":
            return "0";
        case "0":
            return "5";
        case "5":
            return "2";
        default:
            break;
    }
}

function solution(rsp) {
    return rsp.split("").map(v=>winner(v)).join("");
}