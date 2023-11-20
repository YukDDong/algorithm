function solution(my_string) {
    return [...my_string].map((v)=>{
        if(v.match(new RegExp(/^[A-Z]/))){
            return v.toLowerCase();
        }
        return v.toUpperCase();
    }).join("");
}