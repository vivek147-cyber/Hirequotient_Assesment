import { useState } from "react";

import EditIcon from "../assets/edit.svg";
import BinIcon from "../assets/bin.svg";
import CheckIcon from "../assets/check.svg";

import "./MemberTile.css";

function MemberTile({ data, selected, onDelete, onSelect, onUnselect }) {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => setEdit((prev) => !prev);
  const toggleCheck = () => {
    if (!selected) {
      onSelect();
    } else {
      onUnselect();
    }
  };

  return (
    <div className="row" style={{ backgroundColor: selected ? "#abb8c9" : "white" }}>
      <input type="checkbox" onChange={toggleCheck} checked={selected} />
      <p className={edit ? "content" : null} contentEditable={edit}>
        {data.name}
      </p>
      <p className={edit ? "content" : null} contentEditable={edit}>
        {data.email}
      </p>
      <p className={edit ? "content" : null} contentEditable={edit}>
        {data.role}
      </p>
      <div className="buttons">
        <button className="btn" onClick={toggleEdit}>
          <img src={edit ? CheckIcon : EditIcon} alt="edit icon" />
        </button>
        <button className="btn" onClick={onDelete}>
          <img src={BinIcon} alt="bin icon" />
        </button>
      </div>
    </div>
  );
}

export default MemberTile;
