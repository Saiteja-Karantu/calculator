p=""
one=()=>{p=document.getElementById('text1').value=p+'1'}
two=()=>{p=document.getElementById('text1').value=p+'2'}
three=()=>{p=document.getElementById('text1').value=p+'3'}
four=()=>{p=document.getElementById('text1').value=p+'4'}
five=()=>{p=document.getElementById('text1').value=p+'5'}
six=()=>{p=document.getElementById('text1').value=p+'6'}
seven=()=>{p=document.getElementById('text1').value=p+'7'}
eight=()=>{p=document.getElementById('text1').value=p+'8'}
nine=()=>{p=document.getElementById('text1').value=p+'9'}
zero=()=>{p=document.getElementById('text1').value=p+'0'}
plus=()=>{p=document.getElementById('text1').value=p+'+'}
minus=()=>{p=document.getElementById('text1').value=p+'-'}
division=()=>{p=document.getElementById('text1').value=p+'/'}
multiplication=()=>{p=document.getElementById('text1').value=p+'x'}
dot=()=>{p=document.getElementById('text1').value=p+'.'}

let arr=new Array();
let store;
let text=""
let operators=new Array()
sum=""
function calculate()
{
 text=p;
let k=0;
 for(let i=0;i<text.length;i++)
{    
      
    let c;
    if(text[i]=='0')
    {
        sum=sum+"0";
        continue;
    }
    if(text[i]==".")
    {
        sum=sum+".";
        continue;
    }
    
    if(Number(text[i]))
    {
        
        sum=sum+text[i]
        k=0;
        
    }
    else
    {
        operators.push(text[i]);
        c=1;
        ++k;
        
    }
    
    console.log(k)
    if(c==1)
    {
    arr.push(Number(sum));
    sum="";
    c=0;
    
    }
    if(k>1)
    {
    document.getElementById("text1").value="invalid";
    console.log('invalid');
    return;
    }
    
    
}

arr.push(Number(sum))
console.log(arr);
console.log(operators)


for(let i=0;i<arr.length;i++)
{
    if(operators[i]=='/')
    {
    let b=arr[i]/arr[i+1];
    arr.splice(i,2);
    arr.splice(i,0,b);
    operators.splice(i,1);
    i=-1
    }
}
for(let i=0;i<arr.length;i++)
{
    if(operators[i]=='x')
    {
    let b=arr[i]*arr[i+1];
    arr.splice(i,2);
    arr.splice(i,0,b);
    operators.splice(i,1);
    i=-1
    }
}
for(let i=0;i<arr.length;i++)
{
    if(operators[i]=='-')
    {
    let b=arr[i]-arr[i+1];
    arr.splice(i,2);
    arr.splice(i,0,b);
    operators.splice(i,1);
    i=-1
    }
}
for(let i=0;i<arr.length;i++)
{
    if(operators[i]=='+')
    {
    let b=arr[i]+arr[i+1];
    arr.splice(i,2);
    arr.splice(i,0,b);
    operators.splice(i,1);
    i=-1
    }
}
document.getElementById('text1').value=arr;
console.log(arr)

p=""

arr=0;


}


clearScreen=()=>{document.getElementById('text1').value="";
p="";
arr=0
location.reload();
}

back=()=>{
    p=p.substring(0,p.length-1);
document.getElementById("text1").value=p
}
console.log(p)