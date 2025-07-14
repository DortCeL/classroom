import SidebarItem from "../components/sidebar-item"
import "@/styles/sidebar.scss"

function Sidebar() {
    return (
        <aside className="sidebar">
            <SidebarItem title="Courses" isActive={true} />
            <div className="sidebar__sub-items">
                <SidebarItem
                    title="CSE-3200"
                    isSubItem={true}
                    isActive={true}
                />
                <SidebarItem title="CSE-3201" isSubItem={true} />
                <SidebarItem title="HUM-3218" isSubItem={true} />
                <SidebarItem title="MAT-3209" isSubItem={true} />
            </div>
            <SidebarItem title="Slides" />
            <SidebarItem title="Faculty" />
            <SidebarItem title="Routine" />
        </aside>
    )
}

export default Sidebar
