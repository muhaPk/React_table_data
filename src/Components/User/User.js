import React from "react";
import style from "./user.module.scss";

export const User = ({ id, title, body }) => {

  return (
            <div className={style.itemData}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{body}</div>
            </div>
  );
}
