/* eslint-disable react/prop-types */
/* ADDING EXTERNAL STYLE-SHEET FOR PERSONAL STYLES */
import styles from './btn.css'



/* RESUABLE BUTON STYLE */


function Button({text,check,children,loading,fontSize}) {
    
    const style = {
    padding: '1rem 2rem',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#fff',
    position:"relative",
    fontSize:fontSize,
    cursor:"pointer"
}
    return (
         <button onClick={check} style={style} className={`gradient ${styles.btn}`}>
           {loading?children:text}
        </button>
    )
};

export default Button;