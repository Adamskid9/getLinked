function Select({children,marginLeft,text,selectEle,value}) {
    
    return (
        <div className={`${marginLeft?marginLeft:""} marginRight`} >
            <div className="part" >{text}</div>
            <select className="select" value={value} onChange={selectEle} >
             {children}
            </select>
        </div>
    )
}

export default Select
