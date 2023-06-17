import React from 'react'

import fechaSelect from '../../imagenes/svg/down_arrow_icon.svg' 

import { AiOutlineFolderOpen } from 'react-icons/ai'


import '../../styles/select.css'

const Select = () => {
  return (
    <div className='div-select-proyectos'>
        <p className='select-proyectos-titulo'>Proyectos</p>
        <AiOutlineFolderOpen className='ri' />
    </div>
  )
}

export default Select