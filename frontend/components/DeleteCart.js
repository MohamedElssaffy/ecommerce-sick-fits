import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useUser } from '../lib/userContext';

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
  const { getUser } = useUser();
  const [deleteCart, { loading }] = useMutation(DELETE_CART_MUTATION, {
    variables: { id },
    onCompleted() {
      getUser();
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
