import Content from "@/sections/Content"
import Sidebar from "@/sections/Sidebar"
import Topbar from "@/sections/Topbar"

function App() {
    return (
        <div>
            {/* SECTION : TOP BAR */}
            <Topbar />
            {/* SECTION : SIDE BAR */}
            <Sidebar />
            {/* MAIN CONTENT */}
            {/* <Content /> */}
        </div>
    )
}

export default App
