import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component{

    state = { lat:null ,errMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errMessage : err.message})
        );
    }

    renderContent(){
        if(this.state.errMessage && !this.state.lat){
            return(
                <div>Error:{this.state.errMessage}</div>
            )
        }
        else if(this.state.lat && !this.state.errMessage){
            return < SeasonDisplay lat={this.state.lat} />
        }
        else{
            return <Loader message="Please allow location request" />
        }

    }

    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));