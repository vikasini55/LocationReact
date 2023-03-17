import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';
 class App extends React.Component
 {
   /*constructor(props)                        //constructor Method
   {
     super(props)
     this.state={latitude: 0}
     window.navigator.geolocation.getCurrentPosition(
       (position)=>{
         this.setState({latitude: position.coords.latitude})
         this.state.latitude =position.coords.latitude
       },
       (error)=> {
         this.setState({errorMessage : error.message})
       }
     );
   }*/
  //  state ={latitude : null,errorMessage:''}                 /*Component DidMount for latitude */
  //  componentDidMount()
  //  {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position)=>{
  //       this.setState({latitude: position.coords.latitude})
  //       this.state.latitude =position.coords.latitude
  //     },
  //     (error)=> {
  //       this.setState({errorMessage : error.message})
  //     }
  //   );
  //  }
   state ={longitude : null,errorMessage:''}                 /*Component DidMount for longitude */
   componentDidMount()
   {
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState({longitude: position.coords.longitude})
        this.state.longitude =position.coords.longitude
      },
      (error)=> {
        this.setState({errorMessage : error.message})
      }
    );
   }
  //  state ={longitude : null,errorMessage:'',show:true}            /*Component willunMount for longitude */
  //  delHeader = () => {
  //   this.setState({show: false});
  // }
  // render()
  //  {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position)=>{
  //       this.setState({longitude: position.coords.longitude})
  //       this.state.longitude =position.coords.longitude
  //     },
  //     (error)=> {
  //       this.setState({errorMessage : error.message})
  //     }
  //   );
  //  }
  //  render()                           //renderMethod for latitude  -  Rendering the html output
  //  {
  //    if(this.state.errorMessage && !this.state.latitude){
  //      return(<div>{this.state.errorMessage}</div>)                      //coditional rendering
  //    }
  //    if(!this.state.errorMessage && this.state.latitude){
  //     return(<div><HemisphereDisplay latitude={this.state.latitude}/></div>)
  //   }
  //   else{
  //     return(<div>Loading....</div>)
  //   }
  //  }
   render()                           //renderMethod for longitude  -  Rendering the html output
   {
     if(this.state.errorMessage && !this.state.longitude){
       return(<div>{this.state.errorMessage}</div>)                      //coditional rendering
     }
     if(!this.state.errorMessage && this.state.longitude){
      return(<div><HemisphereDisplay longitude={this.state.longitude} /></div>)
    }
    else{
      return(<div>Loading....</div>)
    }
   }
 }

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)

