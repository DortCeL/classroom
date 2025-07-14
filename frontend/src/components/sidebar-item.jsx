import "@/styles/module.sidebar-item.scss"

export default function SidebarItem({
    title,
    isActive = false,
    isDisabled = false,
    isSubItem = false,
    onClick,
}) {
    const className = `sidebar-item${isActive ? " active" : ""}${
        isDisabled ? " disabled" : ""
    }${isSubItem ? " sub-item" : ""}`

    return (
        <div
            className={className}
            onClick={!isDisabled ? onClick : undefined}
            tabIndex={!isDisabled ? 0 : -1}>
            {title}
        </div>
    )
}
