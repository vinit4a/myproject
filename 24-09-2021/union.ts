//union 

function disp(n:string|number,b:number|string){
    if(typeof n ==="number" && typeof b==="number"){
        return n*b;
    }else
    {
      return n.toString() + b.toString();
    }
} 


console.log(disp(2,5));

console.log(disp("vinit ","Dhunaria"));
