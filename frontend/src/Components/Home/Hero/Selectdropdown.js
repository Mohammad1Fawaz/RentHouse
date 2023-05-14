import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Select=(props)=>{
    return(
    <FloatingLabel controlId="floatingSelect">
      <Form.Select aria-label="Floating label select example">
        <option value="saida">{props.value1}</option>
        <option value="Beirut">{props.value2}</option>
        <option value="Saksakieh">{props.value3}</option>
        <option value="Nabatieh">{props.value4}</option>
        <option value="Sarafand">{props.value5}</option>
        <option value="Tyre">{props.value6}</option>
      </Form.Select>
    </FloatingLabel>
  );
}
export default Select