import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import Autosuggest from "react-autosuggest";

import "../../codegig_html/css/style.css";

const languages = [
  {
    name: "C",
    year: 1972
  },
  {
    name: "C#",
    year: 2000
  },
  {
    name: "C++",
    year: 1983
  },
  {
    name: "Clojure",
    year: 2007
  },
  {
    name: "Elm",
    year: 2012
  },
  {
    name: "Go",
    year: 2009
  },
  {
    name: "Haskell",
    year: 1990
  },
  {
    name: "Java",
    year: 1995
  },
  {
    name: "Javascript",
    year: 1995
  },
  {
    name: "Perl",
    year: 1987
  },
  {
    name: "PHP",
    year: 1995
  },
  {
    name: "Python",
    year: 1991
  },
  {
    name: "Ruby",
    year: 1995
  },
  {
    name: "Scala",
    year: 2003
  }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}
class Landing extends React.Component {
  state = {
    value: "",
    suggestions: [],
    term: ""
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const search = this.state.term.replace(" ", "_");
    window.location.href = `/careers/${search}`;
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type 'c'",
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <header>
          <h2>
            <a href="/">
              <i className="fas fa-code" />
              Career
            </a>
          </h2>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/careers">All Careers</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </header>

        <section id="search" className="search-wrap">
          <h1>Find A Career</h1>
          <form onSubmit={this.onSubmit} className="search-form">
            <i className="fas fa-search" />
            <input
              type="text"
              name="term"
              onChange={this.onChange}
              placeholder="Data Science, AutoCard, Graphic Designer, etc..."
            />
            {/* <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            /> */}
            <input type="submit" value="submit" />
          </form>
        </section>
      </div>
    );
  }
}

Landing.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
