import React, { Component } from 'react';
// import { connect } from "react-redux";
// import { searchResultPost } from 'api/application/search';
// import {Col, Button, Row} from 'src/components/UiFramework'
// import {
//   showModal,
// } from 'actions/Modals';
// import {withRouter} from 'react-router';
import './style.scss';
let searchTimer;
class PanigalSuggestionSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      loading: false,
      queryResult: []
    };
    this.onChange = this.onChange.bind(this);

  }

  panigaleSuggestionSearch = (arr) => {
    const myHistory = this.props.history;
    document.querySelector('.panigale-component-block_get-shadow').classList.add('card_white')
    let suggestionThemp;
    this.closeAllLists();
    suggestionThemp = `
        <div id="panigale-suggestion-search__list" class="panigale-suggestion-search__item">
          ${this.state.loading ?
          `<ul class="panigale-suggestion-search__item-ul">
              <li class="panigale-suggestion-search__item-header">در حال جستجو ...</li>
            </ul>` :
            (arr.length > 0 ?
              arr.map(item =>
                `<ul class="panigale-suggestion-search__item-ul">
                    <li class="panigale-suggestion-search__item-header">${item.title}</li>
                    ${item.items.map((itemDetail, index) =>
                  index <= 2 ?
                    `<li class="panigale-suggestion-search__item-body" data-link="${itemDetail.override_link}" data-type="${itemDetail.type}" data-slug="${itemDetail.slug}">${itemDetail.title}</li>` : null
                ).join('')}
                  </ul>`
              ).join('') :
              `<ul class="panigale-suggestion-search__item-ul">
                <li class="panigale-suggestion-search__item-header">نتیجه ای یافت نشد</li>
              </ul>`)
      }
        </div>
      `;
    const parent = document.querySelector('.panigale-component-block_get-shadow');
    parent.insertAdjacentHTML('beforeend', suggestionThemp);

    let eventClass = document.querySelectorAll('.panigale-suggestion-search__item-body');
    let historyLink = function () {
      let link = this.getAttribute('data-link');
      if(link && /^https?:\/\//.test(link)){
        // if link is provided and it is valid
        window.open(link, '_blank');
      }else{
        myHistory.push(`/${this.getAttribute("data-type")}/${this.getAttribute("data-slug")}/`);
        closeModal();
      }
    };
    let closeModal = () => {
      this.props.showModal({
        searchModal: false,
      });
    }
    Array.from(eventClass).forEach(function (element) {
      element.addEventListener('click', historyLink);
    });

  }


  closeAllLists = (elmnt) => {
    let x = document.getElementsByClassName("panigale-suggestion-search__item");
    for (let i = 0; i < x.length; i++) {
      if (elmnt !== x[i]) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  querySuggestion = () => {
    const { query } = this.state;
    this.setState({ loading: true });
    this.panigaleSuggestionSearch();
    // searchResultPost({
    //   query,
    // }).then(response => {
    //   this.setState({ loading: false });
    //   if (response.status === "success") {
    //     this.setState({ queryResult: response.data }, () => {
    //       this.panigaleSuggestionSearch(this.state.queryResult);
    //     })
    //   }
    // })
  }

  handleKeyUp = (e) => {
    if (e.key !== 'Enter') {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        if (this.state.query.length >= 3) {
          this.querySuggestion();
        }
      }, 300);
    }
  }

  querySubmit = () => {
    const { query } = this.state;
    if (query !== "") {
      this.props.showModal({
        searchModal: false,
      });
      this.props.history.push(`/search?q=${query}`);
    }
  }

  handleKeyPress = (e) => {
    let getShadow = document.querySelector('.panigale-component-block_get-shadow');

    if (e.key === 'Enter') {
      this.closeAllLists(e.target);
      if (getShadow.classList.contains('card_white')) {
        getShadow.classList.remove('card_white');
      }
      this.querySubmit(e);
      this.setState({
        query: ""
      })

    }
  }

  componentDidMount() {
    let getShadow = document.querySelector('.panigale-component-block_get-shadow');
    document.addEventListener("click", e => {
      this.closeAllLists(e.target);
      if (getShadow !== null && getShadow.classList.contains('card_white')) {
        getShadow.classList.remove('card_white');
      }
    });
  }

  render() {
    const { query } = this.state;
    return (
      <div className="panigale-component-block panigale-suggestion-searcher">
        <div className="panigale-component-block_get-shadow">
          <div className="row panigale-suggestion-searcher__inner align-items-center">
              <div className="panigale-suggestion-search col pr-0">
                  <input
                      id="panigale-suggestion-search__input"
                      className="form-control form-control-lg form-control-borderless"
                      type="text"
                      placeholder="جستجو مکان, رویداد و ..."
                      name="query"
                      autoComplete="off"
                      value={query}
                      onChange={this.onChange}
                      onKeyPress={this.handleKeyPress}
                      onKeyUp={this.handleKeyUp}
                  />
              </div>
              <div className="col-auto pl-0">
                  <button className="btn btn-danger btn-lg" onClick={this.querySubmit}>
                      <i className="icon icon-profile"></i>
                  </button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PanigalSuggestionSearch;
