define(['dojo/_base/declare', "redux", 'react-components/article/ArticleReducer', 'react-components/search/SearchReducer'], function (declare, redux, ArticleReducer, SearchReducer) {

  return declare("Reducer", null, {
    rootReducer: function rootReducer() {
      var articleReducer = ArticleReducer.prototype.articleReducer;
      var searchReducer = SearchReducer.prototype.searchReducer;

      return redux.combineReducers({
        articlesState: articleReducer,
        searchState: searchReducer
      });
    }
  });
});