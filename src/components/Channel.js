import React from 'react';

class Channel extends React.Component{
    constructor(){
        super();
        this.state = {msg:"State shouldn't be modified directly"}
    }

    like(){
        this.setState({msg:"Right"})
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.msg}
                </h1>
                <button onClick={()=>{
                    this.like()
                }}>Click Me</button>
            </div>
        )
    }
};

export default Channel;