import React from 'react';
import SearchBarContainer from './searchBarContainer';
import SymbolsContainer from './symbolsContainer';

class SearchWidgetContainer extends React.Component {
  render() {
    return (
      <div>
        <SearchBarContainer id={'searchbar'} />
        <SymbolsContainer id={'watchlist'} />
      </div>
    )
  }
}

export default SearchWidgetContainer;
