import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton";


const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        open:
        closed:
    }
    return (
        <div className="sidebar">
            <div className="bg">
                Links
            </div>
            <ToggleButton setOpen={setOpen}/>
        </div>
    )
}

export default Sidebar;