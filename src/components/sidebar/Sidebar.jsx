import Links from "./links/Links";
import "./sidebar.scss"
import ToggleButton from "./toggleButton/toggleButton";
import { useState } from "react";


const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }
    return (
        <div className="sidebar" animate={open ? "open" : "closed"}>
            <div className="bg" variants={variants}>
                <Links />
            </div>
            <ToggleButton setOpen={setOpen} />
        </div>
    )
}

export default Sidebar;