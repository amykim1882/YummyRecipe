import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // in my handle click
  // set a new state with the opposite value of showVillager

  render() {
    // console.log(this.props);

    return (
      <div className="recipe_entry">
        <img
          src={this.props.recipe.image}
          alt="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&w=1000&q=80"
        />
        <div id="Title">
          <h2>{this.props.recipe.title}</h2>
        </div>
        <div id="Description">
          <p>
            Servings: {this.props.recipe.servings} <br></br>
            Calories: {this.props.recipe.calories} <br></br>
            Ratings: {this.props.recipe.rating}
          </p>
        </div>
      </div>
    );
  }
}

export default Recipe;
