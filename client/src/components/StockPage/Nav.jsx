import './nav.css';

function Nav({search, changeTheme}) {
  return(
    <div class="nav">
      <div className="searchBar">
        <input type="text" placeholder="Search.." name="search" />
        <button onClick={search}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <label className="switch">
        <input type="checkbox" onClick={changeTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
export default Nav;