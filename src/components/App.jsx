import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export function App () {

  // const toFiltredContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)));
  // }
  
  // const filtredContacts = toFiltredContacts();
    // onSubmit={handleFormSubmit}
    return (
      <>
        <Section title="Phonebook">
          <ContactForm ></ContactForm>
        </Section>
          
        <Section title="Contacts">
          <Filter></Filter>
          <Contacts > </Contacts>
        </Section> 
        
      </>
    );
  
};
