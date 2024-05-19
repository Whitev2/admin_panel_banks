import { Form } from 'react-bootstrap';
import './Filters.scss';
import { useSearchParams } from 'react-router-dom';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const host = searchParams.get('host') || '';

  const handleQueryChange = (title, value) => {
    const params = new URLSearchParams(searchParams);
    if (!value) {
      params.delete(title);
      setSearchParams(params);
      return;
    }

    params.set(title, value);
    setSearchParams(params);
  };

  return (
    <Form className="Filters">
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          type="text"
          onChange={(e) => handleQueryChange('name', e.target.value)}
          placeholder="Enter Instance Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="host">
        <Form.Label>Host</Form.Label>
        <Form.Control
          value={host}
          type="text"
          placeholder="Enter Host"
          onChange={(e) => handleQueryChange('host', e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};
