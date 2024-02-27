import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Autocomplete from '@mui/material/Autocomplete';
import { Input, Paper, Typography, Modal, Box, Button, TextField, Card } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { showMessage } from 'app/store/fuse/messageSlice';
import clsx from 'clsx';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
  maxWidth: '1200px',
  maxHeight: '650px',
  overflow: 'auto'
};
function DashboardHeader(props) {
  console.log(props)
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [filterData, setFilterData] = useState({
    // fromDate: '',
    // toDate: '',
    bookingStatus: 'On',
    eventStatus: 'On'
  });


  const filterPartnerData = () => {
    props.setFilterValue(filterData);
  }

  const clearFilters = () => {
    setFilterData({
      // fromDate: '',
      // toDate: '',
      // status: null,
      bookingStatus: 'On',
      eventStatus: 'On'
    });
    props.setFilterValue('');
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-col min-h-full">
        <div className="flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 w-full items-center justify-between py-32 px-10">
          <Card
            className={clsx(
              'flex items-center relative w-full rounded-16 p-20 min-h-64 shadow space-x-8 m-2',
              // variant === 'success' && 'bg-green-600 text-white',
              // variant === 'info' && 'bg-blue-700 text-white',
              // variant === 'error' && 'bg-red-600 text-white',
              // variant === 'warning' && 'bg-orange-600 text-white',
              // className
            )}
            onClick={() => handleView(item)}
            elevation={0}
          // component={item.useRouter ? NavLinkAdapter : 'div'}
          // to={item.link || ''}
          // role={item.link && 'button'}

          >
            {/* {item.image && !item.image && (
        <Box
          sx={{ backgroundColor: 'background.default' }}
          className="flex shrink-0 items-center justify-center w-32 h-32 mr-12 rounded-full"
        >
          <FuseSvgIcon className="opacity-75" color="inherit">
          {`${key}/images/${props.data.id}.jpg`}
          </FuseSvgIcon>
        </Box>
      )} */}


            <img
              className="shrink-0 w-32 h-32 mr-12 rounded-full overflow-hidden object-cover object-center"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyr_FwMIcppToiOqzBPOSE4P5N_PuM67WaoJN31twHQ&s'
              alt="Notification"
            />

            <div className="flex flex-col flex-auto">
              <Typography className="font-semibold line-clamp-1">Ankit</Typography>


              <div className=" font-semibold line-clamp-2" dangerouslySetInnerHTML={{ __html: 'item.mobileNumber' }} />


              {/* {item.country && (
          <Typography className="mt-8 text-sm leading-none " color="text.secondary">
            {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
          </Typography>
        )} */}
            </div>
            <Typography className="font-semibold line-clamp-1">hkdh</Typography>

            {/* <IconButton
        disableRipple
        className="top-0 right-0 absolute p-8"
        color="inherit"
        size="small"
        onClick={()=>handleClose(item.id)}
      >
        <FuseSvgIcon size={12} className="opacity-75" color="inherit">
          heroicons-solid:x
        </FuseSvgIcon>
      </IconButton> */}
            {/* {item.country.split(':')[1]} */}
          </Card>
          <Card
            className={clsx(
              'flex items-center relative w-full rounded-16 p-20 min-h-64 shadow space-x-8 m-2',
              // variant === 'success' && 'bg-green-600 text-white',
              // variant === 'info' && 'bg-blue-700 text-white',
              // variant === 'error' && 'bg-red-600 text-white',
              // variant === 'warning' && 'bg-orange-600 text-white',
              // className
            )}
            onClick={() => handleView(item)}
            elevation={0}
          // component={item.useRouter ? NavLinkAdapter : 'div'}
          // to={item.link || ''}
          // role={item.link && 'button'}

          >
            {/* {item.image && !item.image && (
        <Box
          sx={{ backgroundColor: 'background.default' }}
          className="flex shrink-0 items-center justify-center w-32 h-32 mr-12 rounded-full"
        >
          <FuseSvgIcon className="opacity-75" color="inherit">
          {`${key}/images/${props.data.id}.jpg`}
          </FuseSvgIcon>
        </Box>
      )} */}


            <img
              className="shrink-0 w-32 h-32 mr-12 rounded-full overflow-hidden object-cover object-center"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyr_FwMIcppToiOqzBPOSE4P5N_PuM67WaoJN31twHQ&s'
              alt="Notification"
            />

            <div className="flex flex-col flex-auto">
              <Typography className="font-semibold line-clamp-1">Ankit</Typography>


              <div className=" font-semibold line-clamp-2" dangerouslySetInnerHTML={{ __html: 'item.mobileNumber' }} />


              {/* {item.country && (
          <Typography className="mt-8 text-sm leading-none " color="text.secondary">
            {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
          </Typography>
        )} */}
            </div>
            <Typography className="font-semibold line-clamp-1">hkdh</Typography>

            {/* <IconButton
        disableRipple
        className="top-0 right-0 absolute p-8"
        color="inherit"
        size="small"
        onClick={()=>handleClose(item.id)}
      >
        <FuseSvgIcon size={12} className="opacity-75" color="inherit">
          heroicons-solid:x
        </FuseSvgIcon>
      </IconButton> */}
            {/* {item.country.split(':')[1]} */}
          </Card>
          <Card
            className={clsx(
              'flex items-center relative w-full rounded-16 p-20 min-h-64 shadow space-x-8 m-2',
              // variant === 'success' && 'bg-green-600 text-white',
              // variant === 'info' && 'bg-blue-700 text-white',
              // variant === 'error' && 'bg-red-600 text-white',
              // variant === 'warning' && 'bg-orange-600 text-white',
              // className
            )}
            onClick={() => handleView(item)}
            elevation={0}
          // component={item.useRouter ? NavLinkAdapter : 'div'}
          // to={item.link || ''}
          // role={item.link && 'button'}

          >
            {/* {item.image && !item.image && (
        <Box
          sx={{ backgroundColor: 'background.default' }}
          className="flex shrink-0 items-center justify-center w-32 h-32 mr-12 rounded-full"
        >
          <FuseSvgIcon className="opacity-75" color="inherit">
          {`${key}/images/${props.data.id}.jpg`}
          </FuseSvgIcon>
        </Box>
      )} */}


            <img
              className="shrink-0 w-32 h-32 mr-12 rounded-full overflow-hidden object-cover object-center"
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyr_FwMIcppToiOqzBPOSE4P5N_PuM67WaoJN31twHQ&s'
              alt="Notification"
            />

            <div className="flex flex-col flex-auto">
              <Typography className="font-semibold line-clamp-1">Ankit</Typography>


              <div className=" font-semibold line-clamp-2" dangerouslySetInnerHTML={{ __html: 'item.mobileNumber' }} />


              {/* {item.country && (
          <Typography className="mt-8 text-sm leading-none " color="text.secondary">
            {formatDistanceToNow(new Date(item.time), { addSuffix: true })}
          </Typography>
        )} */}
            </div>
            <Typography className="font-semibold line-clamp-1">hkdh</Typography>

            {/* <IconButton
        disableRipple
        className="top-0 right-0 absolute p-8"
        color="inherit"
        size="small"
        onClick={()=>handleClose(item.id)}
      >
        <FuseSvgIcon size={12} className="opacity-75" color="inherit">
          heroicons-solid:x
        </FuseSvgIcon>
      </IconButton> */}
            {/* {item.country.split(':')[1]} */}
          </Card>

        </div>
        <div className='flex sm:flex-row flex-wrap flex-col justify-between mx-10  mb-10 shadow-1 rounded-16'>
          <div className="flex sm:flex-row flex-wrap flex-col justify-start">
            {/* <TextField
              id="fromDate"
              label="From Date"
              variant="standard"
              type='date'
              value={filterData.fromDate}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ my: 1, minWidth: 140, mx: 1 }}
              onChange={e => setFilterData({ ...filterData, fromDate: e.target.value })}
            /> */}
            {/* <TextField
              id="toDate"
              label="To Date"
              variant="standard"
              type='date'
              value={filterData.toDate}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ my: 1, minWidth: 140, mx: 1 }}
              onChange={e => setFilterData({ ...filterData, toDate: e.target.value })}
            /> */}

            <Autocomplete
              disablePortal
              value={filterData.eventStatus}
              id="eventStatus"
              options={['Active', 'Inactive']}
              sx={{ my: 1, minWidth: 140, mx: 1 }}
              onChange={(e, newValue) => setFilterData({ ...filterData, eventStatus: newValue })}
              renderInput={(params) => <TextField {...params} label="Event Status" variant="standard" />}
            />

            <Autocomplete
              disablePortal
              value={filterData.bookingStatus}
              id="bookingStatus"
              options={['On', 'Off']}
              sx={{ my: 1, minWidth: 140, mx: 1 }}
              onChange={(e, newValue) => setFilterData({ ...filterData, bookingStatus: newValue })}
              renderInput={(params) => <TextField {...params} label="Booking Status" variant="standard" />}
            />



            {/* {_.size(PATIENTSTATUS) > 0 && <Autocomplete
              disablePortal
              value={filterData.status}
              id="status"
              options={PATIENTSTATUS}
              getOptionLabel={option => option.name}
              sx={{ my: 1, minWidth: 140, mx: 1 }}
              onChange={(e, newValue) => setFilterData({ ...filterData, status: newValue })}
              renderInput={(params) => <TextField {...params} label="Status" variant="standard" />}
            />}  */}
          </div>
          <div className="flex flex-row justify-end">
            <Button
              component={Link}
              onClick={filterPartnerData}
              variant="contained"
              color="secondary"
              startIcon={<FuseSvgIcon>heroicons-outline:search</FuseSvgIcon>}
              sx={{ my: 2, mx: 1 }}
              fullWidth
            >
              Search
            </Button>
            <Button
              component={Link}
              onClick={clearFilters}
              variant="outlined"
              color="secondary"
              startIcon={<FuseSvgIcon>heroicons-outline:refresh</FuseSvgIcon>}
              sx={{ my: 2, mx: 1 }}
              fullWidth
            >
              Reset
            </Button>
          </div>
        </div>
      </div>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>

          {/* <VehicleRegisterForm setChange={props.setChange} change={props.change} setOpen={setOpen} /> */}
        </Box>
      </Modal>
    </>
  );
}

export default DashboardHeader;
