const Component = function(prop){
    return (
        <div>
            <h1>this is my name: {prop.name}</h1>
            <h1>I'm learning {prop.technology}</h1>
            <h1>And I'm working at {prop.organization}</h1>
        </div>
    )
}

export default Component