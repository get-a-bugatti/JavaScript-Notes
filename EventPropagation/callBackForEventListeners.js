let b =(name, fnc)=>{

console.log(name)
const event = {
    click: {
        ddd: 'suresh'
    },
    input: {
        ddd: 'ramesh'
    }
}

console.log(event['click']);
fnc(event[name],name);

}

b('click',(e,naam)=>{
console.log(e,naam)
})