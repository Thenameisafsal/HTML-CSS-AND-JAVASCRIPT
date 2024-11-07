import Component from './Component'
const data = [
    {name:"afsal",score:100},
    {name:"rahul",score:100},
    {name:"soorya",score:100}
]

const Components = data.map(function(obj){
    return <Component name={obj.name} score={obj.score}/>
})

export default Components