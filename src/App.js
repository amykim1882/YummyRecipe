import React, {Component} from 'react';
import './App.css';
import recipeJson from "./asset/data/recipe.json";
import Recipe from './components/recipes/Recipe';

const recipes = recipeJson.recipes;


 class App extends Component{

  constructor(){
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
    this.state = {
      result1: [],
      keyword: {
        name: 'title',
        value: null,
      },
      dietLabel: {
        name: 'dietLabel',
        value: null,
      },
      type: {
        name: 'recipeCategory',
        value: null,
      },
      prepTime: {
        name: 'prepTime',
        value: null,
      },
    }
  }


  getKeyword(event) {
    this.setState({
      keyword: {
        ...this.state.keyword,
        value: event.target.value,
      },
    });
  }

  getDietLabel(event) {
    this.setState({
      dietLabel: {
        ...this.state.dietLabel,
        value: event.target.value,
      },
    });
  }

  getType(event) {
    this.setState({
      type: {
        ...this.state.type,
        value: event.target.value,
      },
    });
  }

  getPrepTime(event) {
    this.setState({
      prepTime: {
        ...this.state.prepTime,
        value: event.target.value,
      },
    });
  }

  _handleSubmit(event) {
    const filteredList = [];
    event.preventDefault();
    this.setState((previousState) => {
      return {
          result1 : []
      }
   }
)
    const searchList = [this.state.keyword, this.state.prepTime, this.state.type, this.state.dietLabel];
    
    recipes.forEach((recipe) => {
      var match = true;
      searchList.forEach((search) => {
        if (search.value !== null && (String(recipe[search.name]) !== String(search.value))) {
          match = false;
        }
      });
      if (match) {
        filteredList.push(recipe);
      }
    });
    this.setState({result1: filteredList});
    return false;
  }

  render(){
    
    // const villagerComponent = villagers.map( villager => {
    //   console.log(this.state.villagerCount);
    //   // console.log(villager);
    //   return <Villager key={villager.house} 
    //                     villager={villager} 
    //                     villagerClicked={(showVillager) => this._countClicks(showVillager)}/>
    // })

    // const reciperesult1s = recipes.map(

    // );

    const recipeComponent = this.state.result1.length > 0 ?
      this.state.result1.map(
        result => {
          return <Recipe recipe={result} />
        }
      ) :
      <div>No Results Found</div>;

    console.log(this.state.result1);
    return(
      <div className = "App">
        {/* <div>
        <h1> {this.state.villagerCount === villagers.length ? "Enjoy my villagers" : "Click to show villagers"}</h1>
          {villagerComponent}
        </div> */}
        <h1>Title</h1>
        <form onSubmit={this._handleSubmit}>
          <label for="fname">Recipe name:</label>
          <input type="text" id="fname" name="fname" value={this.state.keyword.value}
          onChange={this.getKeyword.bind(this)}/><br></br>
          <label for="fname">Diet Label:</label>
          <select id="dietLabelDd" value={this.state.dietLabel.value} onChange={this.getDietLabel.bind(this)}>
            <option disabled selected value> -- select an option -- </option>
            <option value="Low-Sodium">Low-Sodium</option>
            <option value="Low-Fat">Low-Fat</option>
            <option value="Low-Carb">Low-Carb</option>
            <option value="Medium-Carb">Medium-Carb</option>
            <option value="High-Carb">High-Carb</option>
            <option value="Balanced">Balanced</option>
            <option value="Vegetarian">Vegetarian</option>

          </select>
          <label for="fname">Recipe Category:</label>
          <select id="dietLabelDd" value={this.state.type.value} onChange={this.getType.bind(this)}>
            <option disabled selected value> -- select an option -- </option>
            <option value="Appetizer">Appetizer</option>
            <option value="Entree">Entree</option>
            <option value="Dessert">Dessert</option>
          </select>
          <label for="fname">Prep-Time:</label>
          <select id="dietLabelDd" value={this.state.prepTime.value} onChange={this.getPrepTime.bind(this)}>
            <option disabled selected value> -- select an option -- </option>
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
          <input type="submit" value="Submit" />
        </form>

        <div>
        {recipeComponent}
        </div>
      </div>
    );
  }


 }
export default App;
