import React from 'react'

class ClassHeader extends React.Component {
    render(){
        return (
        <div>
            <h2>Hello {this.props.name} {this.props.lastName}</h2>
            {this.props.children}
        </div>    
    )}
}

class Clock extends React.Component {
    constructor(props){

        super(props)
        this.state = {date: new Date()}
            
        }

        componentDidMount() {
            this.timerID = setInterval(
              () => this.tick(),
              1000
            );
          }
        
          componentWillUnmount() {
            clearInterval(this.timerID);
          }
        
          tick() {
            this.setState({
              date: new Date()
            });
          }
        
        render(){
            return(
                <div>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                </div>
        )
}
}


export {Clock,ClassHeader};