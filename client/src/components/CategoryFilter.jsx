import React from 'react';
import '../styles/components/CategoryFilter.css';

class CategoryFilter extends React.Component {
  render() {
    const { filterVisible } = this.props;
    let isVisible = '';
    if (filterVisible) {
      isVisible = ' visible';
    }
    return (
      <div className={'CategoryFilter ' + isVisible}>
        <h1>Filter</h1>
      </div>
    );
  }
}

export default CategoryFilter;
