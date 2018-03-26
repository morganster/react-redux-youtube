import React from 'react';
import {
  Col,
  Row,
  } from 'reactstrap';

const ListItem = (props) => {
  const styles = {
    container: {
      position: 'relative',
      padding: '0.2em',
      backgroundColor: '#555',
      margin: '15px 0',
      borderRadius: '5px',
    },
    title:{
      color: '#fff',
      textAlign: 'center',
      top: '0.2em',
      fontSize: '1.4em'
    },
    subtitle:{
      color: '#fff',
      bottom: '0.05em',
      right: '0.05em',
      fontSize: '0.95em'
    },
    description:{
      color: '#fff',
      bottom: '0.05em',
      right: '0.05em',
      fontSize: '0.85em'
    },
    image: {
      cursor: 'pointer'
    }
  };
    return(
      <Row onClick={props.onClick} style={styles.container}> 
        <Col>
            <div>
                <img src={props.thumbnail} alt={props.title} style={styles.image}/>
            </div>
        </Col>
        <Col>
            <div>
              <p style={styles.title}>{props.title}</p>
              <p style={styles.subtitle}>{props.subtitle}</p>
              <p style={styles.description}>{props.description}</p>
            </div>
        </Col>
     </Row>
    )
  }

  export default ListItem;