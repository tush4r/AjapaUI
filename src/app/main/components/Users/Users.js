import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
const FusePageCarded = lazy(() => import('@fuse/core/FusePageCarded'));
import { lazy, useState } from 'react';
import { getRootLevelPermissions } from 'src/app/auth/services/utils/common';
import { getUserRoles } from 'src/app/auth/services/utils/common';
import UsersHeader from './UserHeader';
import UserTable from './UserTable';


function Users() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [change, setChange] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [searchText,setSearchText]=useState('')
  return (
    <FusePageCarded 
      header={<UsersHeader setChange={setChange} change={change} setFilterValue={setFilterValue} searchText={searchText} setSearchText={setSearchText} Role={getUserRoles()} rootPermission={getRootLevelPermissions()}/>}
      content={<UserTable setChange={setChange} change={change} filterValue={filterValue} searchText={searchText} Role={getUserRoles()} rootPermission={getRootLevelPermissions()}/>}
    />
  );
}

export default Users;