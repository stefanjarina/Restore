import { Box, Typography, Pagination } from '@mui/material';
import { MetaData } from '../models/pagination';

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export const AppPagination = ({ metaData, onPageChange }: Props) => {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;

  function getItemRange() {
    return `${(currentPage - 1) * pageSize + 1}-${
      currentPage * pageSize > totalCount ? totalCount : currentPage * pageSize
    }`;
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Displaying {getItemRange()} of {totalCount} items
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
      />
    </Box>
  );
};
