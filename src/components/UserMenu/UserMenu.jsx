import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selector';
import { Wrapper, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome to Phonebook {user.name} </Text>{' '}
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>{' '}
    </Wrapper>
  );
};