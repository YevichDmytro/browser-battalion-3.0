import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './TodayWaterList.module.css';
import { getTodayWaterData } from '../../redux/waterTracker/operations';
import { selectTodayData } from '../../redux/waterTracker/selectors';
import DeleteWaterModal from '../DeleteWaterModal/DeleteWaterModal';
import TodayWaterListItem from '../TodayWaterListItem/TodayWaterListItem';

const TodayWaterList = ({ setModal, setAddModal, setEditingItem }) => {
  const dispatch = useDispatch();
  const todayData = useSelector(selectTodayData) || [];
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  const date = getCurrentDate();

  useEffect(() => {
    dispatch(getTodayWaterData(date));
  }, [dispatch, date]);

  const openAddModal = () => {
    setEditingItem(null);
    setAddModal(true);
    setModal(true);
  };

  const openEditModal = item => {
    setEditingItem(item);
    setAddModal(false);
    setModal(true);
  };

  const sortedTodayData = Array.isArray(todayData)
    ? todayData.slice().sort((a, b) => {
        const [dateA, timeA] = a.dateTime.split(' ');
        const [dateB, timeB] = b.dateTime.split(' ');

        const dateTimeA = new Date(
          `${dateA.split('-').reverse().join('-')}T${timeA}`
        );
        const dateTimeB = new Date(
          `${dateB.split('-').reverse().join('-')}T${timeB}`
        );

        return dateTimeA - dateTimeB;
      })
    : [];

  const handleOpenDeleteModal = item => {
    setItemToDelete(item);
    setIsOpenDeleteModal(true);
  };

  return (
    <div className={clsx(selectTodayData.length > 0 ? css.container : css.noNotesBox)}>
      <h2 className={css.title}>Today</h2>
      <ul className={css.addWaterBox}>
        {sortedTodayData.length > 0 ? (
          sortedTodayData.map(item => (
            <li key={item._id}>
              <TodayWaterListItem
                item={item}
                openEditModal={() => openEditModal(item)}
                openDeleteModal={() => handleOpenDeleteModal(item)}
              />
            </li>
          ))
        ) : (
          <li className={css.noNotes}>No notes yet</li>
        )}
      </ul>
      <button onClick={openAddModal} className={css.button} type="button">
        + Add water
      </button>

      {isOpenDeleteModal && <DeleteWaterModal
        isOpenDeleteModal={isOpenDeleteModal}
        closeModal={() => setIsOpenDeleteModal(false)}
        itemToDelete={itemToDelete}
        date={date}
        setIsOpenDeleteModal={setIsOpenDeleteModal}
      />}
    </div>
  );
};

export default TodayWaterList;
