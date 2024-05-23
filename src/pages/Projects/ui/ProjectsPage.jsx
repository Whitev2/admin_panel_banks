import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './ProjectsPage.scss';
import * as project from '../../../entities/Project';
import { MyModal } from '../../../shared/ui/MyModal/MyModal';
import { MyLoader } from '../../../shared/ui';
import { useLogoutUser } from '../../../entities/User';
import { ProjectsTable } from '../../../widgets/Tables/ProjectsTable';
import { CreateProjectForm } from '../../../widgets/Forms/CreateProjectForm/ui/CreateProjectForm';

export const ProjectsPage = () => {
  const [modalShow, setModalShow] = useState(false);
  const { projects, loading, error } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const logout = useLogoutUser();

  useEffect(() => {
    dispatch(project.getAll())
      .unwrap()
      .catch((err) => {
        if (err.message.includes('401')) {
          logout();
        }
      });
  }, []);

  return (
    <div className="ProjectsPage">
      <header className="ProjectsPage__header">
        <h1>Projects Information</h1>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Create
        </Button>
      </header>

      <main>
        <ProjectsTable projects={projects} />
      </main>

      <footer>
        {!loading && error && <p className="ProjectsPage__error">{error}</p>}
        {loading && (
          <div className="ProjectsPage__loading">
            <MyLoader />
          </div>
        )}
        {!loading && !error && !projects.length && (
          <p className="ProjectsPage__loading">There is no instancies</p>
        )}
      </footer>

      <MyModal
        show={modalShow}
        title="Create project"
        onHide={() => setModalShow(false)}
      >
        <CreateProjectForm />
      </MyModal>
    </div>
  );
};
