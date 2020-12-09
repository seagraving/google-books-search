import React, { Component } from 'react'
import { Container } from "../components/container/container";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import API from '../utils/API';
import SavedList from "../components/saved/saved-list";

class savedPage extends Component {

    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks()
    }

    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }


    render() {
        return (
            <div>
                <Navbar />
                <Container fluid>
                <Header />
                {this.state.savedBooks.length ? (
                    <SavedList 
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedList>
                ) : (
                    <h5>"No results to display (yet!)"</h5>
                )}
                </Container>
            </div>
        )
    }
}

export default savedPage;
