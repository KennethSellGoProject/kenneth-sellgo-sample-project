import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDollar,
  faCubes,
  faThList,
  faLock,
  faSkullCrossbones,
  faEllipsisV,
  faBell,
  faCamera
} from "@fortawesome/free-solid-svg-icons";

import "./ListItem.css";

export default function ListItem({ data }) {
  return (
    <>
      <div className="list-item__wrapper">
        <div className="list-item__info">
          <div className="info__checkbox-wrapper">
            <input type="checkbox" className="info__checkbox" />
          </div>
          <div className="info__img-wrapper">
            <img src={data.img_src} alt="list-image-1" className="info__img" />
          </div>
          <div className="info__content">
            <p className="content__name">{data.name}</p>
            <div className="content__add-info">
              <img
                src={data.flag_img_src}
                alt="list-image-2"
                className="add-info__flag"
              />
              <p className="add-info__text">{data.text}</p>
              <ul className="add-info__icon-list">
                <li className="add-info__icon-list-item add-info__icon-list-item--active">
                  <FontAwesomeIcon icon={faSkullCrossbones} />
                </li>
                <li className="add-info__icon-list-item add-info__icon-list-item--active">
                  <FontAwesomeIcon icon={faLock} />
                </li>
                <li className="add-info__icon-list-item">
                  <FontAwesomeIcon icon={faThList} />
                </li>
                <li className="add-info__icon-list-item">
                  <FontAwesomeIcon icon={faCubes} />
                </li>
                <li className="add-info__icon-list-item">
                  <FontAwesomeIcon icon={faCommentDollar} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="list-item__data">
          <ul className="data__list">
            {data.data.map(data => {
              return (
                <li className="data__list-item" data-label={data.label}>
                  {data.value}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list-item__options">
          <ul className="options__list">
            <li className="options__list-item">
              <FontAwesomeIcon icon={faCamera} />
            </li>
            <li className="options__list-item options__list-item--active">
              <FontAwesomeIcon icon={faBell} />
            </li>
            <li className="options__list-item">
              <FontAwesomeIcon icon={faEllipsisV} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
