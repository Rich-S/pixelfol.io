import React from 'react';
import './searchWidgetContainer.css';
import SearchBarContainer from './searchBarContainer';
import SymbolsContainer from './symbolsContainer';

class SearchWidgetContainer extends React.Component {
  render() {
    return (
      <div id='main-app-searchwidget'>
        <SearchBarContainer id={'searchbar-container'} />
        <SymbolsContainer id={'watchlist'} />
      </div>
    )
  }
}

export default SearchWidgetContainer;
