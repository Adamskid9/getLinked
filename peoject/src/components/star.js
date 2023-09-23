function Star({left,top,bottom,right}) {
    const style ={
        position:"absolute",
        top: `${top}rem`,
        left: `${left}rem`,
        right: `${right}rem`,
        bottom: `${bottom}rem`,
        height: '1.5rem',
        width: '1.5rem',
    }
    return (
      
            <img src="/star.png" style={style}  alt=""/>

    )
};

export default Star;
