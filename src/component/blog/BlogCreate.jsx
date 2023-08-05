import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

export default class BlogCreate extends Component {
    // Componentteki isim
    static displayName = "Blog_Create";

    // Constructor
    constructor(props) {
      super(props);
  
      // STATE
      this.state = {
        header: null,
        content: null,
        blogDto: {}, //object
        isRead: false, // sözleşme kuralları
      };
     } //end constructor

  render() {
    return (
      <div>BlogCreate</div>
    )
  }
}