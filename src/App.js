import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./componets/card-list/card-list.component";
import SearchBox from "./componets/search-box/search-box.componet";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("Monsters Rolodex");
  const [filteredMonster, setFilterMonster] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      {/*{filerMonsters.map((monster) => {*/}
      {/*    return (<div key={monster.id}>*/}
      {/*            <h2>{monster.name}</h2>*/}

      {/*        </div>);*/}
      {/*})}*/}
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
        className="monster-searchBox"
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder="Set Title"
        className="monster-searchBox"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

//
// class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             monsters: [], searchField: ''
//         };
//     }
//
//
//
//     onSearchChange = (event) => {
//
//         const searchField = event.target.value.toLocaleLowerCase();
//
//         this.setState(() => {
//             return {searchField}
//         })
//
//     }
//
//
//     render() {
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this;
//
//         const filerMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//
//         })
//
//
//         return
//     }
// }

export default App;
