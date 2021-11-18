import React, {Component} from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
            {title: "The Alchemist", author: "Paulo Coelho"},
            {title: "The Travels of Marco Polo", author: "Marco Polo"},
            {title: "Siddhartha", author: "Herman Hesse"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

render() {
    return(
        
    )
}
