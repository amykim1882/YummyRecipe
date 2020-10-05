import React, {Component} from 'react';
import "./Villager.css";

class Villager extends Component{

    constructor(){
        super();
        this.state ={
            showVillager : false,
        }
        this._handleClick = this._handleClick.bind(this);
    }
    // in my handle click
    // set a new state with the opposite value of showVillager

    _handleClick(){
      //  if (!this.state.showVillager){
        this.props.villagerClicked(!this.state.showVillager);
        this.setState((previousState) => {
                return {
                    showVillager : !previousState.showVillager
                }
             }
          )
      //  }
        // console.log(this.state.showVillager);
    }


    render(){
        // console.log(this.props);
        return(

                <div className = "villager">
                    <img src={this.state.showVillager ? this.props.villager.villager : this.props.villager.house} 
                    alt= "" 
                    onClick={this._handleClick}/>
                </div>
        );
    }
}

export default Villager;