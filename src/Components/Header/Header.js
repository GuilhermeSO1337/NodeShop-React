import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="logo"><a href="#" title="NodeShop - Loja de informática">NodeShop - Loja de informática</a></h1>
      <form method="post"><input type="text" placeholder="Faça sua busca"/>
      <button><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"/></svg></button>
      </form>
      </header>
    </div>
  );
}

export default Header;
