import React, {Component} from 'react';

class Recipe extends Component{

    constructor(){
        super();
        this.state ={
        }
    }
    // in my handle click
    // set a new state with the opposite value of showVillager


    render(){
        // console.log(this.props);
        return(
                <div className = "villager">
                    <img src={this.props.recipe.image} 
                    alt= "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&w=1000&q=80"/>
                    <div>
                        Title {this.props.recipe.title}
                    </div>
                    <div>
                        Serving {this.props.recipe.servings}
                    </div>
                    <div>
                        Calories {this.props.recipe.calories}
                    </div>
                </div>
        );
    }
}

export default Recipe;