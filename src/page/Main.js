import React, { Component } from "react";
import { connect } from "react-redux";
import {
  searchMovie,
  fetchMovies,
  fetchMoviesId,
} from "../redux/action/searchActions";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Main extends Component {
  state = {
    listMovies: [],
    dataSearch: "",
    detailDataMovie: [],
    modal: false,
  };

  async getDataById(id) {
    await this.props.fetchMoviesId(id);
    console.log(this.props);
    if (this.props.data) {
      this.setState({
        detailDataMovie: this.props.data,
      });
    }

    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { listMovies, detailDataMovie } = this.state;

    let MovieModal = (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Movie Detail</ModalHeader>
          <ModalBody>
            <div className="flex flex-col items-center">
              <div>
                <img
                  src={detailDataMovie.poster}
                  alt=""
                  className="w-60 h-96"
                />
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex-1 pr-6">
                  <p>Title : {detailDataMovie.title}</p>
                  <p>Year : {detailDataMovie.year}</p>
                  <p>Duration : {detailDataMovie.length}</p>
                  <p>Rating : {detailDataMovie.rating}</p>
                  <p>Rating Votes : {detailDataMovie.rating_votes}</p>
                </div>
                <div className="flex-1">
                  <p>Plot : {detailDataMovie.plot}</p>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );

    return (
      <div className="flex-1 flex flex-col text-gray-100 mx-auto w-full">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-4xl mt-10">Movie List</h1>
          </div>
          <div className="search-form w-full text-center flex justify-center mt-10">
            <div>
              <form
                action="#"
                className="w-8/12 flex"
                onSubmit={async (e) => {
                  await this.props.fetchMovies(this.state.dataSearch);
                  console.log(this.props);
                  if (this.props.data) {
                    this.setState({
                      listMovies: this.props.data.titles,
                    });
                  }
                  console.log(this.state.listMovies);
                }}
              >
                <div className="p-1 flex flex-col items-center">
                  <input
                    type="text"
                    placeholder="search some movie you like.."
                    name=""
                    id=""
                    className="flex-1 appearance-none rounded shadow p-2 text-gray-700  focus:outline-none text-center"
                    onChange={(e) => {
                      this.setState({
                        dataSearch: e.target.value,
                      });
                    }}
                    value={this.state.dataSearch}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-bg mt-3"
                    value="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Movie Card */}
          <div className="flex flex-col overflow-auto">
            {listMovies.map((row, index) => (
              <div className="flex" key={index.id}>
                <div className="movie-card mb-10 mt-10">
                  <img src={row.image} alt="" className=" w-60 h-96" />
                  <h4
                    style={{ cursor: "pointer" }}
                    onClick={() => this.getDataById(row.id)}
                  >
                    {row.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          {MovieModal}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.movies.data,
    title: state.movies.title,
  };
};

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  fetchMoviesId,
})(Main);
