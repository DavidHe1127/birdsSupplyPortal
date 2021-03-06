import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Card, Icon, Grid } from 'semantic-ui-react';

import IronImage from 'helpers/IronImage';
import './styles/index.css';

const Product = ({ id, sku, price, qty, avatar, supplier, onDelete, onEdit }) => {
  const withProdNameOnDelete = e =>
    onDelete(e, {
      sku,
      id
    });

  const withProdIdOnEdit = e =>
    onEdit(e, {
      id
    });

  const ironImageProps = {
    w: 200,
    h: 200,
    q: 10,
    f: avatar
  };

  return (
    <Card className="shadow">
      <IronImage {...ironImageProps} />
      <Card.Content>
        <Card.Header className="sku">{sku}</Card.Header>
        <Card.Description>
          {price.toLocaleString('en-au', {
            style: 'currency',
            currency: 'AUD'
          })}
        </Card.Description>
        <Card.Description className="qty">
          {qty}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={8}>
            {supplier.name}
          </Grid.Column>
          <Grid.Column floated="right" width={8}>
            <Icon
              className="highlight"
              name="edit"
              onClick={withProdIdOnEdit}
            />
            <Icon
              className="highlight"
              name="recycle"
              onClick={withProdNameOnDelete}
            />
          </Grid.Column>
        </Grid.Row>
      </Card.Content>
    </Card>
  );
};

// TODO separate each model out of product
export default createFragmentContainer(Product, {
  parrot: graphql`
    fragment Product_parrot on Parrot {
      name
      description
    }
  `,
  supplier: graphql`
    fragment Product_supplier on Supplier {
      name
    }
  `
});
