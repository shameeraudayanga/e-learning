import React from 'react';
import Pagination from './node_modules/@material-ui/lab/Pagination';
import {getData} from '../Variables/data';

const Paging = () => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(getData.length);
  
  return (
    <div>
      <Pagination count={getData.length} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
    </div>
  );
}

export default Paging;