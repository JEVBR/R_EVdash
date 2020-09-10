import React, { useContext, useState, useEffect } from 'react';
import { ManualInputContext } from '../Dash/DashBoard'


export default function DashManualElement ( { manualInput, animating, formLayout } )  {
  const { handleEntryPost, handleManualInputChange } = useContext(ManualInputContext)
  const [startDate, setStartDate] = useState()
  const [formName, setFormName] = useState({})

  useEffect(() => {
    // setStartDate(new Date())
  }, [animating])

  function handlePost() { 
    handleEntryPost(formLayout.module_name)
  }

  function handleChange(changes) {
    console.log('changes')
    console.log(changes)
    handleManualInputChange (changes)
  }

  function handleTimeChange(changes) {
    setStartDate(changes.time)
    var test = new Date(changes.time)
    test.setHours(test.getHours()-3) // TODO : correct timezone handling
    changes.time = test
    handleManualInputChange (changes)
  }

  function RowName(props) {
    return (
      <tr><td>{props.value}</td></tr>
    )
  }

  function ShowNames(props){
    return (
      <tr>
        {props.value.map(name => ( 
          <td key = {name} scope="col"> {name} </td>
        ))}
      </tr>
    )
  }

  function ShowNoNames(){
    return (
      <tr >
        <td></td>  
      </tr>
    ) 
  }



  function FormRows() {
    const formRows = formLayout.rows.map( ({ row_name, item_names, show_names, items}) => 
      <React.Fragment key = {row_name} >
        <tbody>
          < RowName value = {row_name}  />
          { show_names === "true" ? < ShowNames value={item_names}/> : <ShowNoNames key = {item_names}/> }
          <tr>
            {items.map(item => (
              <td className= {animating ? "dash-manual-entrada" : "dash-manual-entrada2"} key = {item}  >
                { item ? 
                  <input 
                    type="text"
                    name={item}
                    id={item}
                    value={manualInput[item]}
                    onChange={e => handleChange({ [item]: e.target.value})}
                    className="post-edit__input" 
                  /> 
                :
                  <div>-</div>
                }     
              </td>
            ))}
          </tr>
        </tbody>
      </React.Fragment>
    )
      return (
         formRows 
      )
  }

  const submitButton = 
    <button
      className="btn btn--primary mr-1"
      onClick={() => handlePost()}
      >
     SEND
    </button>

  return (
    <div>
      <div className="dash-overflow">
        <table className="table">
          <tbody>
            <tr>
              <th scope="col">Dia e Hora da Amostragem</th>
              <th scope="col">-</th> 
            </tr>
            <tr> 
              <th>
                { submitButton }
              </th>
            </tr>
          </tbody>
        </table>

        <table className="table-striped table-bordered">
            {FormRows() }
        </table>
      </div>
    </div>
  );
}
