import faker from 'faker';
import _ from 'lodash';
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import BasicAutoSuggest from './components/basic.autosuggest';
import ServerAutoSuggest from './components/server.autosuggest';
const getOptions = () =>
  _.times(3, () => {
    const name = faker.name.findName()
    return { key: name, text: name, value: _.snakeCase(name) }
  })
class App extends React.Component {
  state = {
    isFetching: false,
    multiple: true,
    search: true,
    searchQuery: null,
    value: [],
    options: getOptions(),
  }
  toggleSearch = (e) => this.setState({ search: e.target.checked });
  handleChange = (e, { value }) => this.setState({ value })
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  fetchOptions = () => {
    this.setState({ isFetching: true })

    setTimeout(() => {
      this.setState({ isFetching: false, options: getOptions() })
      this.selectRandom()
    }, 500)
  }
  render() {

    return (
      <div className="App">

      <h1>Basic Auto Suggest</h1>
      <BasicAutoSuggest />

      <h1>Server Auto Suggest</h1>
      <ServerAutoSuggest />
    </div>
    );
  }
}
export default App;
