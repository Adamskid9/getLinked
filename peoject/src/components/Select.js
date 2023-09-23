function Select({children,marginLeft,text}) {
    return (
        <div className={`${marginLeft?marginLeft:""} marginRight`} >
            <div className="part" >{text}</div>
            <select className="select" >
             {children}
            </select>
        </div>
    )
}

export default Select
