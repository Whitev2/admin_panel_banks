import { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './InstanciesPage.scss';
import * as instance from '../../../entities/Instance';

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
      <aside className="InstanciesPage__aside">
        <h2>Admin Panel</h2>

        <nav className="InstanciesPage__nav">
          <ul className="InstanciesPage__nav-list">
            <li className="InstanciesPage__nav-item">
              <img src="/icons/instancies.png" alt="instancies" />
              Instancies
            </li>
          </ul>
        </nav>
      </aside>

      <main className="InstanciesPage__main">
        <h1>Instance Information</h1>
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

        <table className="InstanciesPage__table">
          <thead>
            <tr>
              <th className="InstanciesPage__table-th" scope="col">
                <Form>
                  <Form.Check />
                </Form>
              </th>
              <th className="InstanciesPage__table-th" scope="col">
                Instance Name
              </th>
              <th className="InstanciesPage__table-th" scope="col">
                Host
              </th>
              <th className="InstanciesPage__table-th" scope="col">
                Active Machines
              </th>
              <th className="InstanciesPage__table-th" scope="col">
                Stopped Machines
              </th>
              <th className="InstanciesPage__table-th" scope="col">
                Available Machines
              </th>
              <th className="InstanciesPage__table-th" scope="col">
                Status
              </th>
            </tr>
          </thead>
          {!loading && !error && instancies.length && (
            <>
              {instancies.map((inst) => (
                <tbody key={inst.id}>
                  <tr>
                    <td className="InstanciesPage__table-td">
                      <Form>
                        <Form.Check />
                      </Form>
                    </td>
                    <td className="InstanciesPage__table-td">{inst.name}</td>
                    <td className="InstanciesPage__table-td">???</td>
                    <td className="InstanciesPage__table-td">
                      {inst.worked_machines}
                    </td>
                    <td className="InstanciesPage__table-td">
                      {inst.stopped_machines}
                    </td>
                    <td className="InstanciesPage__table-td">
                      {inst.available_machines}
                    </td>
                    <td className="InstanciesPage__table-td">{inst.status}</td>
                  </tr>
                </tbody>
              ))}
            </>
          )}

          {!loading && error && (
            <p className="InstanciesPage__error">{error}</p>
          )}
        </table>

        {loading && <p className="InstanciesPage__loading">Loaging...</p>}
        {!loading && !error && !instancies.length && (
          <p className="InstanciesPage__loading">There is no instancies</p>
        )}
      </main>
    </div>
  );
};
