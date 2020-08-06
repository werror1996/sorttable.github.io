import React, { Component } from "react";
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import _ from "lodash";
import DetailView from "./Table/DetailView";
import ModeSelector from "./ModeSelector/ModeSelector";
import ReactPaginate from "react-paginate";
import TableSearch from "./TableSearch/TableSearch";

class App extends Component {
  state = {
    isModeSelcet: false,
    isLoading: false,
    data: [],
    search: "",
    sort: "asc",
    sortField: "id",
    row: null,
    currentPage: 0,
    person: null,
  };

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

    this.setState({ data, sort, sortField });
  };

  modeSelectHandler = (url) => {
    this.setState({
      isModeSelcet: true,
      isLoading: true,
    });
    this.fetchData(url);
  };

  onRowSelect = (row) => {
    this.setState({ row });
  };

  pageChangedHandler = ({ selected }) => {
    this.setState({ currentPage: selected });
  };

  searchHandler = (search) => {
    this.setState({ search, currentPage: 0 });
  };

  getFilteredData() {
    const { data, search } = this.state;

    if (!search) {
      return data;
    }

    return data.filter((item) => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  render() {
    const pageSize = 50;

    if (!this.state.isModeSelcet) {
      return (
        <div className="container-fluid">
          <ModeSelector onSelect={this.modeSelectHandler} />
        </div>
      );
    }
    const filteredData = this.getFilteredData();
    const pageCount = Math.ceil(filteredData.length / pageSize);
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];

    return (
      <div className="container">
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <TableSearch onSearch={this.searchHandler} />
            <Table
              data={displayData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
            />
          </React.Fragment>
        )}
        {this.state.data.length > pageSize ? (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.pageChangedHandler}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.state.currentPage}
          />
        ) : null}

        {this.state.row ? <DetailView person={this.state.row} /> : null}
      </div>
    );
  }
}

export default App;
