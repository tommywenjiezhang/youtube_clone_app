import React, { Component } from 'react'

class SearchBar extends Component{
  constructor (props){
    super(props)

    this.state = {term: ''}
  }
  render() {
    return (
      <div className="container pl-0 ml-0">
        <div className="row">
          <div className="col-md-8 offset-md-4">
            <input
            value ={this.state.term}
             onChange = {event => this.onInputChange(event.target.value)}
            className ="search-bar form-control"
           />
          </div>
        </div>


      </div>

    )
  }
onInputChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term)
}

}

export default SearchBar;
