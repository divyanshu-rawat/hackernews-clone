import React from 'react';
import '../styles/App.css';
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Search from './Search'
/*

apollo-client: Where all the magic happens.
apollo-cache-inmemory: Our recommended cache.
apollo-link-http: An Apollo Link for remote data fetching.
apollo-link-error: An Apollo Link for error handling.
apollo-link-state: An Apollo Link for local state management.
graphql-tag: Exports the gql function for your queries & mutations.
react-apollo contains the bindings to use Apollo Client with React.
graphql contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality as well.

*/

class App extends React.Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
// You  need to wrap the App with BrowserRouter so that all child components of App will get access to the routing functionality.