/* eslint-disable react/prop-types */
// import styles from './GlowEffect.module.css';

function GlowEffect({top, left, right, bottom}) {
    const style = {
        height: '6rem',
        width: '6rem',
        borderRadius: '50%',
        backgroundColor: '#903AFF',
        filter: 'blur(3rem)',
        position: 'absolute',
        zIndex: '-1',
        top: `${top}rem`,
        left: `${left}`,
        right: `${right}rem`,
        bottom: `${bottom}rem`,
    }
    return (
        <div style={style}></div>
    )
};

export default GlowEffect;
