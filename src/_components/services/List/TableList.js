import React from 'react';
import { Box, Button, DataTable, Text } from 'grommet';
import { DateTime } from 'luxon';
import { Actions, FormClose, FormEdit } from 'grommet-icons';

function TableList({ data, handleRemove, setCurrentEntity }) {
  return (
    <DataTable
      color="brand"
      columns={[
        { property: 'id', primary: true, header: <Text>Id</Text> },
        { property: 'name', header: <Text>Name</Text> },
        {
          property: 'createdAt',
          header: <Text>Created</Text>,
          render: (row) =>
            DateTime.fromMillis(row.createdAt).toLocaleString(
              DateTime.DATETIME_MED
            ),
        },
        {
          property: 'updatedAt',
          header: <Text>Updated</Text>,
          render: (row) =>
            DateTime.fromMillis(row.updatedAt).toLocaleString(
              DateTime.DATETIME_MED
            ),
        },
        {
          property: 'actions',
          header: <Actions />,
          render: (row) => {
            return (
              <Box direction="row" gap="xsmall">
                <Button
                  type="button"
                  onClick={() => setCurrentEntity(row)}
                  icon={<FormEdit color="brand" />}
                  plain
                />
                <Button
                  type="button"
                  onClick={() => handleRemove(row.id)}
                  icon={<FormClose color="accent-2" />}
                  plain
                />
              </Box>
            );
          },
        },
      ]}
      data={data}
    />
  );
}

export default TableList;
