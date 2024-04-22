import { TableCell, TableRow, TableSortLabel, Tooltip, TableHead } from '@mui/material';
import { lighten } from '@mui/material/styles';

function AllEventRegistrationTableHead(props) {

  const rows = [
    {
      id: 'familyId',
      align: 'center',
      disablePadding: false,
      label: 'Family Id',
      sort: true,
      visibleIf: true
    },
    {
      id: 'userName',
      align: 'center',
      disablePadding: false,
      label: 'User Name',
      sort: true,
      visibleIf: true
    },
    {
      id: 'eventName',
      align: 'center',
      disablePadding: false,
      label: 'Event Name',
      sort: true,
      visibleIf: true
    },
    {
      id: 'eventDate',
      align: 'center',
      disablePadding: false,
      label: 'Event Date',
      sort: true,
      visibleIf: true
    },
    {
      id: 'fromCountry',
      align: 'center',
      disablePadding: false,
      label: 'From Country',
      sort: true,
      visibleIf: true
    },
    {
      id: 'fromState',
      align: 'center',
      disablePadding: false,
      label: 'From State',
      sort: true,
      visibleIf: true
    },

    {
      id: 'fromCity',
      align: 'center',
      disablePadding: false,
      label: 'From City',
      sort: true,
      visibleIf: true
    },
    {
      id: 'attendingShivir',
      align: 'center',
      disablePadding: false,
      label: 'Attending Shivir',
      sort: true,
      visibleIf: true
    },
    {
      id: 'action',
      align: 'center',
      disablePadding: false,
      label: 'Action',
      sort: true,
      visibleIf: true
    }
  ];


  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        {rows.map((row) => {
          if (row.visibleIf)
            return (
              <TableCell
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? lighten(theme.palette.background.default, 0.4)
                      : lighten(theme.palette.background.default, 0.02),
                }}
                className="p-4 md:p-16"
                key={row.id}
                align={row.align}
                padding={row.disablePadding ? 'none' : 'normal'}
                sortDirection={props.order.id === row.id ? props.order.direction : false}
              >
                {row.sort && (
                  <Tooltip
                    title="Sort"
                    placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={props.order.id === row.id}
                      direction={props.order.direction}
                      onClick={createSortHandler(row.id)}
                      className="font-semibold"
                    >
                      {row.label}
                    </TableSortLabel>
                  </Tooltip>
                )}
              </TableCell>
            );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default AllEventRegistrationTableHead;