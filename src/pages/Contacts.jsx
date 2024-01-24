import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { fetchContacts } from '../store/contacts/operations';
import { selectLoading } from '../store/contacts/selectors';
import { Loader } from '../components/Loader/Loader';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />
      <div>{isLoading && <Loader />}</div> <ContactList />
    </>
  );
}