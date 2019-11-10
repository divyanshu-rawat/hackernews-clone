import React from 'react';
import '../styles/App.css';
import LinkList from './LinkList'
import CreateLink from './CreateLink'

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

function App() {
  return <CreateLink />
}

export default App;
