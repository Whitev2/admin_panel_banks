import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import './SideBar.scss';

export const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <h2>Admin Panel</h2>

      <nav className="Sidebar__nav">
        <nav className="Sidebar__nav-list">
          <NavLink
            to="projects"
            className={({ isActive }) =>
              cn('Sidebar__nav-item', {
                'Sidebar__nav-item--active': isActive,
              })
            }
          >
            <img src="/icons/instancies.png" alt="instancies" />
            Projects
          </NavLink>

          <NavLink
            to="instancies"
            className={({ isActive }) =>
              cn('Sidebar__nav-item', {
                'Sidebar__nav-item--active': isActive,
              })
            }
          >
            <img src="/icons/instancies.png" alt="instancies" />
            Instancies
          </NavLink>

          {/* <NavLink
            to="machines"
            className={({ isActive }) =>
              cn('Sidebar__nav-item', {
                'Sidebar__nav-item--active': isActive,
              })
            }
          >
            <img src="/icons/instancies.png" alt="instancies" />
            Machines
          </NavLink> */}
        </nav>
      </nav>
    </aside>
  );
};
