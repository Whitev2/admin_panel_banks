import './SideBar.scss';
export const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <h2>Admin Panel</h2>

      <nav className="Sidebar__nav">
        <ul className="Sidebar__nav-list">
          <li className="Sidebar__nav-item">
            <img src="/icons/instancies.png" alt="instancies" />
            Instancies
          </li>
        </ul>
      </nav>
    </aside>
  );
};
