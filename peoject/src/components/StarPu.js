function StarPu({left,top,bottom,right,height="1.5",width="1.5"}) {
    const style ={
        position:"absolute",
        top: `${top}rem`,
        left: `${left}rem`,
        right: `${right}rem`,
        bottom: `${bottom}rem`,
        height: `${height}rem`,
        width: `${width}rem`,
    }
    return (
      
            <img src="/starpu.png" style={style}  alt=""/>

    )
};

export default StarPu;
