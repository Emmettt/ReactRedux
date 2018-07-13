import React, { Component } from 'react';

class ContactTab extends Component {
  render() {
    let contact = this.props.items.find(
      el => el.contact.email === this.props.contact
    );

    if (!contact) return <p>Choose contact</p>;
    const { firstName, lastName, avatar } = contact.general;
    const { title, company } = contact.job;
    const { street, city, zipCode, country } = contact.address;
    const { email, phone } = contact.contact;

    return (
      <div>
        <img
          className="avatarFullSize"
          src={avatar}
          alt={firstName}
          width="32px"
        />
        <div class="infoWrapper">
          <p className="firstName">{firstName}</p>
          <p className="lastName">{lastName}</p>
          <p className="job">{title}</p>
          <p className="job">{company}</p>
        </div>
        <div class="adressWrapper">
          <p className="adress">{street}</p>
          <p className="adress">{city}</p>
          <p className="adress">{zipCode}</p>
          <p className="adress">{country}</p>
        </div>
        <div class="contactWrapper">
          <p className="contacts">e-mail: {email}</p>
          <p className="contacts">phone: {phone}</p>
        </div>
      </div>
    );
  }
}

export default ContactTab;
