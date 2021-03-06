import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import NewProduct from 'components/Main/Products/NewProduct';

const query = graphql`
  query NewProductContainerQuery {
    parrotsToProduct {
      ...NewProduct_parrotsToProduct
    }
  }
`;

export default class NewProductContainer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={this.variables}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <NewProduct {...props} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
