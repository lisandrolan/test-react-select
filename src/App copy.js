import faker from 'faker';
import _ from 'lodash';
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from "semantic-ui-react";

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
    const {  options, isFetching,  value } = this.state
    return (
      <div className="App">
        <Dropdown
          fluid
          selection
          multiple={false}
          search={true}
          options={options}
          value={value}
          placeholder="Add Users"
          onChange={this.handleChange}
          onSearchChange={this.handleSearchChange}
          disabled={isFetching}
          loading={isFetching}
        />
      </div>
    );
  }
}
export default App;
