import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DELETE_CART_MUTATION = gql`
  mutation DELETE_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const BigBtnStyles = styled.button`
  font-size: 3rem;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
    color: var(--red);
  }
`;

function DeleteCart({ id }) {
  const [deleteCart, { loading }] = useMutation(DELETE_CART_MUTATION, {
    variables: { id },
    update(cache, payload) {
      cache.evict(cache.identify(payload.data.deleteCartItem));
    },
  });
  return (
    <BigBtnStyles
      type="button"
      disabled={loading}
      title="Remove Item From This Cart"
      onClick={deleteCart}
    >
      &times;
    </BigBtnStyles>
  );
}

DeleteCart.propTypes = {
  id: PropTypes.string,
};

export default DeleteCart;
