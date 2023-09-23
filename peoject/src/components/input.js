function Input({label,placeholder,clas,clas2}) {
    return (
        <div className="input_container" >
        <label className={`${clas2?clas2:""} label`}>{label}</label> <br/>
        <input className= {`input_value ${clas?clas:""}`} type="text" placeholder={placeholder} /><br/>
        </div>
    )
};

export default Input;