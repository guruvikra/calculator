const clicked=(a)=>{
    document.getElementById("dis1").value +=a
}
const cleard=(a)=>{
    document.getElementById("dis1").value=""
}
const del=()=>{
    document.getElementById("dis1").value=document.getElementById("dis1").value.slice(0,-1)
}
const eva=()=>{
    document.getElementById("dis1").value=eval(document.getElementById("dis1").value)
}