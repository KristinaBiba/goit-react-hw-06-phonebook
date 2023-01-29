import { Li, Ul, P, Button } from './Contacts_css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from "../../redux/selectors";
import { deleteContact } from '../../redux/contactsSlice';

export const Contacts = () => {

      const contacts = useSelector(getContacts);
      const dispatch = useDispatch();

      const onDeliteContact = (id) => {
            dispatch(deleteContact(id));
      }
      
      return (
          <Ul>
                  {contacts.map(({ id, name, number }) => (
                  <Li key={id}>
                              <P>{name}: {number}</P>
                              <Button onClick={()=> {onDeliteContact(id)}}>Delite</Button>
                  </Li>))}
          </Ul>)
};
