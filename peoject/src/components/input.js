function Input({label,placeholder,clas,clas2,type,handle,value}) {
    return (
        <div className="input_container" >
        <label className={`${clas2?clas2:""} label`}>{handle}</label> <br/>
        <input
         className= {`input_value ${clas?clas:""}`}
         type={type} placeholder={placeholder}
         value={value}
          required
          onChange={handle}
          />
          <br/>
        </div>
    )
};

export default Input;