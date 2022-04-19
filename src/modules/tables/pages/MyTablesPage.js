import React from 'react'
import { useParams } from 'react-router-dom';
import useWaiter from '../../waiters/hooks/useWaiter';
import AddToTableComponent from '../components/AddToTableComponent';
import MyTableHeader from '../components/MyTableHeader'


export default function MyTables() {
  const { waiterId } = useParams();
  const waiter = useWaiter(waiterId);
  return (
    <div><MyTableHeader waiter={waiter} />
    <AddToTableComponent />
    </div>
  )
}
