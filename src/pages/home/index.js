/*
 * @Description: 
 * @Author: @[caohefei]
 * @Date: 2020-03-31 18:25:21
 * @LastEditors: @[caohefei]
 * @LastEditTime: 2020-04-02 13:16:01
 */
import React, {useState} from 'react'
import {ajax} from '../../utils/ajax'


import './index.css'
 const list = [
   {
     node:1,
     des:'公司信息'
   },
   {
     node:2,
     des:'股本信息'
   },
   {
     node:3,
     des:'股东董事'
   },
   {
     node:4,
     des:'收费信息'
   },
  ]

const radioList = [
    { label: '私人资本（自有个人资金）', value: 'private_person',  },
    { label: '私人投资者资本（第三方资金）', value: 'private_capital' },
    { label: '风险投资（投资公司资金)', value: 'venture_capital'},
    { label: '其他（如信托，众筹等）', value: 'others'}
  ]
const typeList = [
  { label: '普通股', value: 'stock',  },
  { label: '其他（建议咨询律师）', value: 'others' },
]

const stockholderType = [
  { label: '个人', value: 'person'  },
  { label: '企业', value: 'enterprise' },
]
const rolesType = [
  { label: '董事', value: 'director',  },
  { label: '股东', value: 'stockholder' },
  { label: '最终受益人', value: 'ultimate beneficary' },
]
const serviceList = [
  { label: '商业登记费（政府）:250港币', value: 'biz_sign_250',  },
  { label: '公司注册费（政府):1720港币', value: 'com_register_1720' },
  { label: '公司秘书（海比邻):2500港币', value: 'com_admin_2500' },
  { label: '注册服务费（海比邻):999港币', value: 'register_999' },
]
const addressList = [
  { label: '注册地址(仅限政府信件) : 免费', value: 'gov_address_free',  },
  { label: '商业地址(<50商业信件) : 2500 HKD', value: 'biz_address_2500' },
  { label: '自有注册地址 : 免费', value: 'private_address_free' },
]
  
 function Home (){


  ajax({
    type:'post',
    url:'checkName',
    data:{
      phone:1,
      company_en:1,
      company_cn:1
    },
    success (res){

    }
  })
  const [current, setcurrent] = useState(3);
  //page1
  const [nameEn, setNameEN] = useState('') //  英文公司名字
  const [nameCn, setNameCN] = useState('') //  中文 公司名字的
  const [nameCn1, setNameCN1] = useState('') //  中文 公司名字的  
  const [nature, setNature] = useState('') //  性质  
  const [desNature, setDesNature] = useState('') //描述 
  const [country, setCountry] = useState('') //国家

//page2
  const [ shares, setShares ] = useState('') //  股份类型
  const [ sharesDes, setsharesDes ] = useState('') //  其他说明
  const [ sharesNum, setsharesNum ] = useState('') //  股份数量
  const [ oneValue_shares, setoneValue_shares ] = useState('') // 单股 价值
  const [ fundsForm, setfundsForm ] = useState([])//  资金来源
  const [ fundsDes, setFundsDes ] = useState('') //  其他说明
  const [ fundsCountry, setfundsCountry ] = useState('') //  资金来源国家


  function changefunds (e){  
    
    setfundsForm(pre=>{
      if(!pre.includes(e)){
        return [...pre, e]
      }else{
        return pre.filter(item=>{return item !== e})
      }
    })
  }
 
 //page3
  const [ stocklist, setstocklist] = useState([
    {
    title:'第一董事/股东类型',
    stockholder:'',
    roles:[],
    numShares:'',
    shareName:'',
    shareNumber:'',
    shareNationality:'',
    shareEmail:'',
    shareTel:'',
    shareAddress:'',
  }
])

function  stockholdeChange (item, type, val){
  item[type] = val
  setstocklist(list=>{
    return list.concat([])
  })
}
function roleChange (obj, val){
  if(obj.roles.includes(val)){
   val = obj.roles.filter(item=>{ return item !== val})
  }else{
    val = [...obj.roles, val]
  }
   stockholdeChange(obj, 'roles', val)
 }

 function  addStockItem (){
  setstocklist(list=>{
    return [...list, {
      title:`董事/股东信息 (${list.length})`,
      stockholder:'',
      roles:'',
      numShares:'',
      shareName:'',
      shareNumber:'',
      shareNationality:'',
      shareEmail:'',
      shareTel:'',
      shareAddress:'',
    }]
  })
}
function delStock (obj){
  setstocklist(list=>{  
    return list.filter((item)=>{
      return item !== obj
    })
  })

}


  //page4
  const [ address, setAddress ] = useState('')

  const [ addressDes, setAddressDes ] = useState('') //  其他说明
   return (
     <div className='home'>
       <div className='progress_bar'>
        {list.map((item, index) => {
           return (<div  key={index}>
             {index !== 0 && <div className={current >= item.node ? 'active_line' : 'line'}></div>}
             <div className={current >= item.node ? 'node  active_node' : 'node'}>
              {item.node}
               <div className='des_Text'> {item.des}</div>
             </div>
             
           </div>)
        })}
       </div>
       <div  className='page'>
         {current === 1  && <div  className='page1'>
          <div className='inputItem'>
            <p>公司名字（首选）: 中文/英文</p>
            <input    onChange={e=>setNameEN(e.target.value)} value={nameEn}  />
          </div>
          <div className='inputItem'>
            <p>公司名字（次选）：中文/英文</p>
            <input     onChange={e=>setNameCN(e.target.value)} value={nameCn} />
          </div>
          <div className='inputItem'>
            <p>公司名字（三选）：中文/英文</p>
            <input   onChange={e=>setNameCN1(e.target.value)} value={nameCn1}  />
          </div>
          <div className='inputItem'>
            <p>经营性质 (贸易，咨询，软件，制造等)</p>
            <input    onChange={e=>setNature(e.target.value)} value={nature}   />
          </div>
          <div  className='textareaItem'>
                  <p>主营业务描述（不少于100字符）</p>
                  <textarea     onChange={e=>setDesNature(e.target.value)} value={desNature}   type='text'/>
            </div>
          <div className='inputItem'>
            <p>经营地点（国家）</p>
            <input   onChange={e=>setCountry(e.target.value)} value={country}   />
          </div>
          <div  className='action_line'>   <button  className='btn fr'  onClick={()=>{setcurrent(2)}}>下一步</button> </div>
         </div>}
         {current === 2  && <div  className='page2'>
          <div className='module'>
             <h3 className='title'>股份类别</h3>
             {typeList.map((type, index)=>{
               return (
                 <div  key={index} className='radio'   onClick={()=>setShares(type.value)} >
                   <span   className='radioTitle' >{type.label}</span>
                   <span  className={shares === type.value ? 'icon-radio-checked fontIcon' : 'icon-radio-unchecked fontIcon'}></span>
                 </div>
               )
             })}
          </div>
          {shares === 'others' && <div className='inputItem'>
            <p>如选其他股份类别，请指明</p>
            <input     value={sharesDes} onChange={e=>setsharesDes(e.target.value)}  />
          </div>}
          <div className='inputItem'>
            <p>股份数量（建议1000股）</p>
            <input  type='number'   value={sharesNum}  onChange={e=>setsharesNum(e.target.value)} />
          </div>
          <div className='inputItem'>
            <p>每股价值（如每股1美金）</p>
            <input  value={oneValue_shares}  onChange={e=>setoneValue_shares(e.target.value)}  />
          </div>
          <div className='module'>
             <h3 className='title'>资金来源</h3>
             {radioList.map((item, index)=>{
               return (
                 <div  key={index} className='checkBox'   onClick={changefunds.bind(null, item.value)} >
                   <span   className='radioTitle' >{item.label}</span>
                   <span  className={fundsForm.includes(item.value) ? 'icon-check_box fontIcon' : 'icon-check_box_outline_blank fontIcon'}></span>
                 </div>
               )
             })}
          </div>
         {fundsForm.includes('others') &&  <div className='inputItem'>
            <p>如选其他资金来源，请指明)</p>
            <input  value={fundsDes} onChange={e=>{setFundsDes(e.target.value)}}  />
          </div> }
          <div className='inputItem'>
            <p>资金来源地（国家）</p>
            <input  value={fundsCountry} onChange={e=>{setfundsCountry(e.target.value)}} />
          </div>
          <div  className='action_line'>    <button  className='btn fl'  onClick={()=>{setcurrent((index)=>index - 1)}}>上一步</button>  <button  className='btn fr'  onClick={()=>{setcurrent((index)=>index + 1)}}>下一步</button> </div>
         </div>}

         {current === 3  && <div  className='page3'>
          {stocklist.map((item, index)=>{
            return (
              <div className='module' key={index}>
                <h3 className='title'>
                  {item.title}
                  {index !== 0 &&   <span  onClick={()=>{delStock(item)}}  className='icon-trash-can'></span> }
                
                 </h3>
                {stockholderType.map((itemRadio, stockInxex)=>{
                    return (
                      <div  key={stockInxex} className='radio'   onClick={()=>stockholdeChange(item, 'stockholder', itemRadio.value)} >
                        <span   className='radioTitle' >{itemRadio.label}</span>
                        <span  className={item.stockholder === itemRadio.value  ? 'icon-radio-checked fontIcon' : 'icon-radio-unchecked fontIcon'}></span>
                      </div>
                    )
                 })}
                <h3 className='title'>角色</h3>
                {rolesType.map(itemCheckBox=>{
                      return (
                        <div  key={itemCheckBox.label} className='checkBox'    onClick={()=>{roleChange(item, itemCheckBox.value)}}>
                          <span   className='radioTitle' >{itemCheckBox.label}</span>
                          <span  className={item.roles.includes(itemCheckBox.value) ? 'icon-check_box fontIcon' : 'icon-check_box_outline_blank fontIcon'}></span>
                        </div>
                      )
                })}
                <div  className='listInputItem'>
                  <div className='inputItem'>
                    <p>普通股数量</p>
                    <input   value={item.numShares} onChange={e=>stockholdeChange(item, 'numShares', e.target.value) }/>
                  </div>
                  <div className='inputItem'>
                    <p>名字：中文/英文</p>
                    <input   value={item.shareName} onChange={e=>stockholdeChange(item, 'shareName', e.target.value) }/>
                  </div>
                  <div className='inputItem'>
                    <p>护照号/香港身份证号</p>
                    <input   value={item.shareNumber} onChange={e=>stockholdeChange(item, 'shareNumber', e.target.value) }/>
                  </div>
                  <div className='inputItem'>
                    <p>国籍</p>
                    <input   value={item.shareNationality} onChange={e=>stockholdeChange(item, 'shareNationality', e.target.value) }/>
                  </div>
                  <div className='inputItem'>
                    <p>邮箱</p>
                    <input   value={item.shareEmail} onChange={e=>stockholdeChange(item, 'shareEmail', e.target.value) }/>
                  </div>
                  <div className='inputItem'>
                    <p>电话</p>
                    <input   value={item.shareTel} onChange={e=>stockholdeChange(item, 'shareTel', e.target.value) }/>
                  </div>
                  <div className='inputItem'>
                    <p>地址（必须是此人当前的实际地址）</p>
                    <input   value={item.shareAddress} onChange={e=>stockholdeChange(item, 'shareAddress', e.target.value) }/>
                  </div>

                </div>
              </div>
            )
          })}

          <div  className='action_line'>  
             <button  className='btn fr'  onClick={addStockItem}  >添加股东/董事</button>
          </div>
          <div  className='action_line'>  
             <button  className='btn fl'  onClick={()=>{setcurrent((index)=>index - 1)}}>上一步</button> 
             <button  className='btn fr'  onClick={()=>{setcurrent((index)=>index + 1)}}>下一步</button>
          </div>
         </div>}
         
         {current === 4  && <div  className='page4'>
          <div className='module'>
             <h3 className='title'>地址服务</h3>
             {addressList.map((type, index)=>{
               return (
                 <div  key={index} className='radio'   onClick={()=>setAddress(type.value)} >
                   <span   className='radioTitle' >{type.label}</span>
                   <span  className={address === type.value ? 'icon-radio-checked fontIcon' : 'icon-radio-unchecked fontIcon'}></span>
                 </div>
               )
             })}
          </div>
          {address === 'private_address_free' && <div className='inputItem'>
            <p>请输入您的注册地址</p>
            <input     value={addressDes} onChange={e=>setAddressDes(e.target.value)}  />
          </div>}
          <div className='module'>
             <h3 className='title'>必选服务</h3>
             {serviceList.map((item, index)=>{
               return (
                 <div  key={index} className='checkBox'   >
                   <span   className='radioTitle' >{item.label}</span>
                   <span  className='icon-check_box fontIcon' ></span>
                 </div>
               )
             })}
          </div>
          <div  className='action_line'>    <button  className='btn fl'  onClick={()=>{setcurrent((index)=>index - 1)}}>上一步</button>  <button  className='btn fr'  onClick={()=>{setcurrent((index)=>index + 1)}}>提交</button> </div>
         </div>}
       </div>
     </div>
   )
 }

 
 export default Home
