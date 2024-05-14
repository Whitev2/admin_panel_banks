import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './InstanciesPage.scss';
import * as instance from '../../../entities/Instance';
import { InstanciesTable } from '../../../widgets/InstanciesTable';

export const InstanciesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') || '';
  const host = searchParams.get('host') || '';
  const status = searchParams.get('status') || '';
  const { instancies, loading, error } = useSelector((state) => state.instance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(instance.getAll());
  }, []);

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
    <div className="InstanciesPage">
      <header className="InstanciesPage__header">
        <h1>Instance Information</h1>
        <Button variant="primary">Create</Button>
      </header>

      <main>
        <Form className="InstanciesPage__filters">
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
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              value={status}
              placeholder="Instance Status"
              onChange={(e) => handleQueryChange('status', e.target.value)}
            />
          </Form.Group>
        </Form>

        <InstanciesTable instancies={instancies} />
      </main>

      <footer>
        {!loading && error && <p className="InstanciesPage__error">{error}</p>}
        {loading && <p className="InstanciesPage__loading">Loaging...</p>}
        {!loading && !error && !instancies.length && (
          <p className="InstanciesPage__loading">There is no instancies</p>
        )}
      </footer>
    </div>
  );
};
