import React from "react";
import PropTypes from 'prop-types';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import './Sort.scss'

const Sort = ({ setSortArgs }) =>  {
  const handleClick = (key, order) => {
    setSortArgs({key, order});
};

    return (
      <Container className="sort">
        <h3>Sort by:</h3>
        
            <ButtonGroup>
              <Button variant="light" onClick={() => handleClick('name', 'asc')}> Name A to Z </Button> 
              <Button variant="light" onClick={() => handleClick('name', 'desc')}> Name Z to A </Button>
              <Button variant="light" onClick={() => handleClick('price.current.value', 'asc')}> Prices from lowest </Button>
              <Button variant="light" onClick={() => handleClick('price.current.value', 'desc')}> Prices form highest </Button>
            </ButtonGroup>
         
      </Container>
    )
  }


Sort.propTypes = {
    setSortArgs: PropTypes.func.isRequired, 
}

export default Sort;