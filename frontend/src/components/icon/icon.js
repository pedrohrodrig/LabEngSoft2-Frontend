import React from "react";
import "./icon.css";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/chevron-left.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevron-right.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

function Icon({ className, iconType }) {
    const classes = `icon ${className}`;

    switch (iconType) {
        case "arrow-right": return <ArrowRight className={classes} />;
        case "chevron-left": return <ChevronLeft className={classes} />;
        case "chevron-right": return <ChevronRight className={classes} />;
        case "edit": return <Edit className={classes} />;
        case "logout": return <Logout className={classes} />;
        case "search": return <Search className={classes} />;
    }
}

export default Icon;
