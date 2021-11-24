import React from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { customStyles } from "../styles/style";
function DynamicDiv(){
Modal.setAppElement('#root');

 const data = [{label:"div",color:'red'}]
 const [dataSet,setDataSet] = React.useState(data);
 const [modalIsOpen, setIsOpen] = React.useState(false);
 const [tempIndex,setTempIndex] = React.useState(0);
 const [state,setState] = React.useState({
     div1Color : '',
     div2Color : ''
 })
    const onDivClick = (node,index) => {
        console.log(node,index);
        setTempIndex(index);
        setIsOpen(true);
    }

  const onDivColorChange = (e) => {
    const {name,value} = e.target;
    setState({...state,[name]:value});
  }

  function closeModal() {
    setIsOpen(false);
    
  }
  function onSubmit () {
      debugger
      let dataValues = dataSet;
      dataValues.splice(tempIndex+1,0,{label:"div",color:state.div1Color})
      dataValues.splice(tempIndex+2,0,{label:"div",color:state.div2Color})
      setState({...state,div1Color:'',div2Color:''});
      setDataSet(dataValues);
      setIsOpen(false);
      setTempIndex(0);
  }
  React.useEffect(()=> {

  },[data]);
  return (
      <>
        {dataSet.length > 0 ? dataSet.map((x,key) => (
         <div style={{padding : 2,margin: 2 , backgroundColor:x.color}} onClick={()=>onDivClick(x,key)}>{x.label}</div>
        )) : null}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 >Add Two Divs</h2>
            
            <div>Enter Div BG Color</div>
            <form>
               <label style={{paddingRight : 20}}>
                    <strong>Label</strong>
                </label>    
                <label >
                    <strong>Color</strong>
                    
                </label>    <br />
                <label style={{paddingRight : 20}}>
                    Div 1
                </label>    
                <input onChange={onDivColorChange} name="div1Color" value={state.div1Color} />
                <br />
                <label style={{paddingRight : 20}}>
                    Div 2
                </label>    
                <input onChange={onDivColorChange} name="div2Color" value={state.div2Color} />
                <br/>
                <button style={{backgroundColor:"blue",padding:3,marginTop:5,float:'right'}} onClick={onSubmit}>Add</button>
                <button style={{backgroundColor:"red" ,padding:3,marginTop:5,float:'right'}} onClick={closeModal}>close</button>
            </form>
        </Modal>
      </>
  ) 

}

export default DynamicDiv;