import "@/styles/Topbar.scss"

function Topbar() {
    return (
        <header className="topbar">
            <div id="logo" className="logo">
                ClassRoom
            </div>
            <div className="search">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for course or teacher"
                />
                <span className="search-icon">👀</span>
            </div>
            <div className="logout">
                <span className="logout__label">Logged in as</span>
                <span className="logout__name">Md Ismail AliF</span>
                <button>Logout</button>
            </div>
        </header>
    )
}

export default Topbar
