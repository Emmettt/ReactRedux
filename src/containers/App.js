import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import ContactTab from '../components/ContactTab';
import inputAction from '../actions/inputAction';
import contactClick from '../actions/contactClick';

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="heading">React + Redux</h1>
        <section className="sectionList">
          <SearchBar inputHandler={this.props.inputAction} />
          <div class="contactListWrapper">
            <ContactList
              items={this.props.clients}
              query={this.props.searchQuery}
              contactID={this.props.contactID}
              contactClickHandler={this.props.contactClick}
            />
          </div>
        </section>
        <section className="sectionInfo">
          <ContactTab
            items={this.props.clients}
            contact={this.props.contactID}
          />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients,
    contactID: state.contactID,
    searchQuery: state.searchQuery
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputAction: bindActionCreators(inputAction, dispatch),
    contactClick: bindActionCreators(contactClick, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
