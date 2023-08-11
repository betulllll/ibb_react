import React, { Component } from 'react'
import { withTranslation } from 'react-i18next';

class BlogCreate extends Component {

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
    }; //end constructor

    // BIND
    this.onChangeIsRead = this.onChangeIsRead.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
  }

  // CDM

  // FUNCTION
  onChangeIsRead = (event) => {
    console.log(event.target.checked);
    this.setState({
      isRead: event.target.checked,
    })
  }

  // ONCHANGE
  onChangeInputValue = (event) => {
    //1 .YOL
    // const name=event.target.name;
    // console.log("name:"+name);
    // const value=event.target.value;
    // console.log("value: "+value);

    //2.YOL
    const { name, value } = event.target
    //console.log(name+" "+value);
    //console.log(`${name} ${value}`);

    // STATE
    this.setState({
      [name]: value,
    })
  }

  //RENDER
  render() {
    //object destructing
    const { t } = this.props;
    const { isRead } = this.state;

    // RETURN
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">{t('blog_create')}</h1>

        <form>
          {/* HEADER */}
          <div className="form-group mb-4">
            <span>{t("blog_header")}</span>
            <input
              type="text"
              className="form-control"
              id="header"
              name="header"
              placeholder={t("blog_header")}
              required={true}
              autoFocus={true}
              onChange={this.onChangeInputValue}
            />
          </div>

          {/* CONTENT */}
          <div className="form-group mb-4">
            <span>{t("blog_content")}</span>
            <textarea
              className="form-control"
              id="content"
              name="content"
              required={true}
              placeholder={t("blog_content")}
              onChange={this.onChangeInputValue}
              rows="6"></textarea>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={this.onChangeIsRead}
              id="isReadId"
              name="isReadId" />
            <label className="form-check-label" htmlFor="isReadId"> Anlaşmayı okudunuz mu </label>
          </div>

          {/* SUBMIT */}
          <button
            className="btn btn-danger mb-5 me-2">{t('reset')}</button>

          <button
            className="btn btn-primary mb-5"
            disabled={!isRead}>{t('submit')}</button>
          <br /><br /><br /><br /> <br /><br /><br />
        </form>
      </React.Fragment>
    ) //end return
  } //end render
} // end class

// Blog Create
export default withTranslation()(BlogCreate);