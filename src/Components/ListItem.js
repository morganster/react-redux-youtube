import React from 'react';

const ListItem = (props) => {
  const styles = {
    container: {
      position: 'relative',
      padding: '0.2em',
      backgroundColor: ''
    },
    title:{
      color: '#fff',
      position: 'absolute',
      textAlign: 'center',
      top: '0.2em',
      fontSize: '1.4em'
    },
    subtitle:{
      color: '#fff',
      position: 'absolute',
      bottom: '0.05em',
      right: '0.05em',
      fontSize: '0.95em'
    },
    image: {
      cursor: 'pointer'
    }
  };
    return(
      <div onClick={props.onClick} style={styles.container}> 
        <p style={styles.title}>{props.title}</p>
        <p style={styles.subtitle}>{props.subtitle}</p>
        <span>{props.duration}</span>
        <img src={props.thumbnail} alt={props.title} style={styles.image}/>
     </div>
    )
  }

  export default ListItem;