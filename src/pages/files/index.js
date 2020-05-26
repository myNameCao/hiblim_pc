import React, {useState} from 'react'

import fileImg from './files.png'

import Input from '../../components/input'


import './index.less'


 function Files (){
    const [paths, setPaths] = useState()
    const [filesList, setFilesList] = useState([
      {name:'Accounting', type:'file', time:'Apr 12, 2020 14:48:34', id:1},
      {name:'Corporate ', type:'dir', time:'Apr 12, 2020 14:48:34', id:2}
    ])
    const [allsel, setAllsel] = useState(false)

   return (
     <div className='files' >
       <div className='FilesTitle'>
           <span className='fileImage icon-dir' ></span>
           Company Secretary
         </div>
       <div className='searchFiles'>
         <div className='icon-search'></div>
         <div className='searchInput'>
            <Input  title='search' allowEmpty />
         </div>
       </div>
      <div className='path'>Secretary  {paths ? `> ${paths}` : ''}</div>
       <ul className='filesView'>
          <li className='fileslistTitle fileLine'>
          <span  className={allsel ? 'fileSel icon-select' : 'fileSel icon-notsel'} ></span>
           <span  className='fileType icon-alldir' ></span>
           <span  className='FilesName' >Name</span>
          </li>
          {filesList.map(file=>{
            return <li className='filesItem  fileLine' key={file.id}>
                      <span  className={file.type ? 'fileSel icon-select' : 'fileSel icon-notsel'} ></span>
                      <span  className={file.type === 'file' ? 'fileType icon-file' : 'fileType icon-folder'} ></span>
                      <span  className='filesName' >{file.name}</span>
                      <span  className='filesTime' >{file.time}</span>
           </li>
          })}
       </ul>
     </div>
   )
 }

 
 export default Files
