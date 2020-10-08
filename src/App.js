import React, { Component } from "react";
import "./App.css";
import recipeJson from "./asset/data/recipe.json";
import Recipe from "./components/recipes/Recipe";
import icon from "./asset/images/food_icon.png";

const recipes = recipeJson.recipes;

class App extends Component {
  constructor() {
    super();
    // this.inputRef = React.createRef();
    // this.prepTimeRef = React.createRef();
    // this.dietLabelRef = React.createRef();
    // this.typeRef = React.createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this.state = {
      result1: [],
      hasResult: false,
      firstTime: true,
      keyword: {
        name: "title",
        value: "",
        // value: undefined,
      },
      dietLabel: {
        name: "dietLabel",
        value: "",
        // value: undefined,
      },
      type: {
        name: "recipeCategory",
        value: "",
        // value: undefined,
      },
      prepTime: {
        name: "prepTime",
        value: "",
        // value: undefined,
      },
    };
  }
  _getKeyword(event) {
    this.setState({
      keyword: {
        ...this.state.keyword,
        value: event.target.value,
        // value: this._fetchData(this.inputRef.current.value)
      },
    });
  }

  _getDietLabel(event) {
    console.log(this.state.dietLabel);
    this.setState({
      dietLabel: {
        ...this.state.dietLabel,
        value: event.target.value,
      },
    });
  }

  _getType(event) {
    this.setState({
      type: {
        ...this.state.type,
        value: event.target.value,
      },
    });
  }

  _getPrepTime(event) {
    this.setState({
      prepTime: {
        ...this.state.prepTime,
        value: event.target.value,
      },
    });
  }

  _handleSubmit(event) {
    // this._fetchData();
    const filteredList = [];
    event.preventDefault();
    this.setState((previousState) => {
      return {
        result1: [],
      };
    });
    const searchList = [
      this.state.keyword,
      this.state.prepTime,
      this.state.type,
      this.state.dietLabel,
    ];

    recipes.forEach((recipe) => {
      let match = false;
      const matches = [];
      // console.log("sugar cookies".includes("cookies"));
      // console.log(recipe.name);
      console.log(recipe[searchList[0].name].toLowerCase());
      console.log([searchList[0].value]);
      console.log(
        String(recipe[searchList[0].name]).toLowerCase().includes("cookies")
      );
      if (
        String(recipe[searchList[0].name])
          .toLowerCase()
          .includes(String(searchList[0].value))
      ) {
        match = true;
      }
      matches.push(match);
      // console.log(match);
      if (matches[0]) {
        console.log("inside");
        for (let i = 1; i < searchList.length; i++) {
          console.log(searchList[i].value);
          if (
            String(recipe[searchList[i].name]) === searchList[i].value ||
            searchList[i].value === ""
          ) {
            match = true;
          } else {
            match = false;
          }
          matches.push(match);
          console.log(matches);
        }
        // searchList.forEach((search) => {
        //   if (
        //     // search.value !== "" &&
        //     // String(recipe[search.name]).toLowerCase() !==
        //     //   String(search.value).toLowerCase()
        //     String(recipe[searchList[0].name])
        //       .toLowerCase()
        //       .includes(String(searchList[0].value)) &&
        //     String(recipe[search.name]) !== search.value
        //   ) {
        //     // console.log(String(recipe[search.name]).toLowerCase());
        //     // console.log(String(search.value));
        //     // if (
        //     //   (search.value != null &&
        //     //     String(recipe[search.name])
        //     //       .toLowerCase()
        //     //       .includes(String(search.value))) ||
        //     // String(recipe[search.name]) === String(search.value)
        //     console.log(String(recipe[search.name]));
        //     console.log(search.value);
        //     match = false;
        //   }
        //   console.log(match);
        // });
      }
      // console.log(match);
      // if (match) {
      //   filteredList.push(recipe);
      // }
      if (!matches.includes(false)) {
        filteredList.push(recipe);
      }
    });
    this.setState({
      result1: filteredList,
      hasResult: true,
    });
    console.log(this.hasResult);
    return false;
  }

  render() {
    const recipeComponent =
      this.state.result1.length > 0 ? (
        this.state.result1.map((result) => {
          // console.log(result.title);
          return <Recipe key={result.title} recipe={result} />; // add unique key here
        })
      ) : (
        <div id="None">No Results Found</div>
      );
    // console.log(this.state.result1);
    return (
      <div className="App">
        {/* <div>
        <h1> {this.state.villagerCount === villagers.length ? "Enjoy my villagers" : "Click to show villagers"}</h1>
          {villagerComponent}
        </div> */}
        <img src={icon} id="logo" alt="Dish with Utensils" />
        <h1>Yummy Recipes</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="filter">
            <label htmlFor="fname">Recipe name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={this.state.keyword.value}
              onChange={this._getKeyword.bind(this)}
            />
          </div>
          <div className="filter">
            <label htmlFor="fname">Diet Label:</label>
            <select
              id="dietLabelDd"
              value={this.state.dietLabel.value}
              onChange={this._getDietLabel.bind(this)}
            >
              {/* <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option> */}
              <option value="all">all</option>
              <option value="Low-Sodium">Low-Sodium</option>
              <option value="Low-Fat">Low-Fat</option>
              <option value="Low-Carb">Low-Carb</option>
              <option value="Medium-Carb">Medium-Carb</option>
              <option value="High-Carb">High-Carb</option>
              <option value="Balanced">Balanced</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="fname">Recipe Category:</label>
            <select
              id="dietLabelDd"
              value={this.state.type.value}
              onChange={this._getType.bind(this)}
            >
              {/* <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option> */}
              <option value="all">all</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Entree">Entree</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
          <div className="filter">
            <label htmlFor="fname">Prep-Time:</label>
            <select
              id="dietLabelDd"
              value={this.state.prepTime.value}
              onChange={this._getPrepTime.bind(this)}
            >
              {/* <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option> */}
              <option value="all">all</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="80">80</option>
              <option value="195">195</option>
              <option value="360">360</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <br></br>
        <div className="recipes">{recipeComponent}</div>
      </div>
    );
  }
}
export default App;
