import React from 'react'
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

export default function PostIt( props ) {
  return (
    <div className={"postIt"}>
        <div>
            <p>Titulo</p>
            <span> {props.desc} </span>
        </div>
        <div>
            <p>Prazo</p>
            <span> {props.date} </span>
        </div>
        <div className="icon">
            <BsFillTrashFill className=" trash" onClick={ () => props.removePostIt( props.index ) }/>
            <MdModeEditOutline className="edit" onClick={ () => props.editPostIt( props.index ) } />
        </div>
    </div>
  )
}