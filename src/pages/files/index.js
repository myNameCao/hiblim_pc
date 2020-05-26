import React, {useState} from 'react'

import fileImg from './files.png'

import './index.less'


 function Files (){
    const [paths, setPaths] = useState('cao')
    const [filesList, setFilesList] = useState([{name:'capo'}])

   return (
     <div className='files' >
       <div className='FilesTitle'>
           <img className='fileImage icon-dir'  src={fileImg}/>
           Company Secretary
         </div>
       <div className='searchFiles'>
         <div className='icon-search'></div>
       </div>
      <div className='path'>Secretary  {paths ? `> ${paths}` : ''}</div>
       <ul className='filesView'>
          <li className='fileslistTitle fileLine'>
           <span  className='select_icon' ></span>
           <span  className='fileType_icon icon-alldir' ></span>
           <span  className='FilesName' >Name</span>
          </li>
          {filesList.map(file=>{
            return <li className='filesItem  fileLine' key={file}>
                      <span  className={file.type ? 'fileSel icon-select' : 'fileSel icon-notsel'} ></span>
                      <span  className={file.type ? 'fileType icon-file' : 'fileType icon-alldir'} ></span>
                      <span  className='FilesName' >{file.name}</span>
                      <span  className='filesTime' >{file.time}</span>
           </li>
          })}
       </ul>
     </div>
   )
 }

 
 export default Files
