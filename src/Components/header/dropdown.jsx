import React from "react";
import style from "./dropdown.module.scss";

function DropDown() {

    return(
        <div>
            <select onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();' className={style.dropdown}>
                <option   value="russian">Рус</option>
                <option   value="english">Eng</option>
            </select>
        </div>
    )
}
//style={{backgroundColor: "#282828"}}
export default DropDown