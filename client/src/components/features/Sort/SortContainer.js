import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSortArgs, getSortedProducts } from '../../../redux/productsRedux.js';
import Sort from './Sort';


 const SortContainer = ({ setSortArgs }) => {
    return <Sort setSortArgs={setSortArgs} />;
  };
    
  const mapStateToProps = state => ({
    products: getSortedProducts(state),
  })
  
  
const mapDispatchToProps = dispatch  => ({
    setSortArgs: (products) => dispatch(setSortArgs(products))
  });

  SortContainer.propTypes = {
    setSortArgs: PropTypes.func.isRequired
  };

export default connect( mapStateToProps, mapDispatchToProps)(SortContainer);