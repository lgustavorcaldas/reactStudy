import React from 'react'
import { PostItStyle } from "./style"
import { MdModeEditOutline } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

export default function PostIt( props ) {
  return (
    <PostItStyle className={props.class}>
        <div className='descPostIt'>
            <p>Descrição</p>
            <span> {props.desc} </span>
        </div>
        <div className='datePostIt'>
            <p>Prazo</p>
            <span> {props.date} </span>
        </div>
        <div className="icon">
            <MdModeEditOutline className="edit" onClick={ () => props.editPostIt( props.index ) } />
            <BsFillTrashFill className=" trash" onClick={ () => props.removePostIt( props.index ) }/>
        </div>
    </PostItStyle>
  )
}
