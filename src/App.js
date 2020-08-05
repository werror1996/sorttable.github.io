import React, { Component } from "react";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import _ from "lodash";
import DetailView from "./Table/DetailView";
import ModeSelector from "./ModeSelector/ModeSelector";

class App extends Component {
  state = {
    isModeSelcet: false,
    isLoading: false,
    data: [],
    sort: "asc",
    sortField: "id",
    row: null,
  };

  async componentDidMount() {
    const response = await fetch(
      `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
    );
    const data = await response.json();
    // console.log(data);
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort),
    });
  }

  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort),
    });
  }

  onSort = (sortField) => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === "asc" ? "desc" : "asc";
    const data = _.orderBy(cloneData, sortField, sort);

    this.setState({
      data,
      sort,
      sortField,
    });
  };

  onRowSelect = (row) => {
    this.setState({ row });
  };

  modeSelectHandler = (url) => {
    this.setState({
      isModeSelcet: true,
      isLoading: true,
    });
    this.fetchData(url);
  };

  render() {
    if (!this.state.isModeSelcet) {
      return (
        <div className="container-fluid">
          <ModeSelector onSelect={this.modeSelectHandler} />
        </div>
      );
    }
    return (
      <div className="container-fluid">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Table
            data={this.state.data}
            onSort={this.onSort}
            sort={this.state.sort}
            sortField={this.state.sortField}
            onRowSelect={this.onRowSelect}
          ></Table>
        )}
        {this.state.row ? <DetailView person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;
