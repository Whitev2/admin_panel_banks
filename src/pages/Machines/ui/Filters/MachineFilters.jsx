import { Form } from 'react-bootstrap';
import './MachineFilters.scss';
import { useSearchParams } from 'react-router-dom';

export const MachineFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const host = searchParams.get('host') || '';
  const status = searchParams.get('status') || '';
  const state = searchParams.get('state') || '';

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
        <Form.Label>Instance name</Form.Label>
        <Form.Control
          value={host}
          type="text"
          placeholder="Enter host"
          onChange={(e) => handleQueryChange('host', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          value={status}
          type="text"
          placeholder="Enter status"
          onChange={(e) => handleQueryChange('status', e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="state">
        <Form.Label>State</Form.Label>
        <Form.Control
          value={state}
          type="text"
          placeholder="Machine state"
          onChange={(e) => handleQueryChange('state', e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};
