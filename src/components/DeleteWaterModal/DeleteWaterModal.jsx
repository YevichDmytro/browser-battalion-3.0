import clsx from 'clsx';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import css from './DeleteWaterModal.module.css'
import { deleteWaterItem, getTodayWaterData } from '../../redux/waterTracker/operations';
import ModalWrapper from "../ModalWrapper/ModalWrapper"

const DeleteWaterModal = ({ isOpenDeleteModal, closeModal, itemToDelete, date, setIsOpenDeleteModal }) => {
    const dispatch = useDispatch()
  
    const handleDelete = () => {
    dispatch(deleteWaterItem(itemToDelete._id))
      .then(() => {
        dispatch(getTodayWaterData(date));
        setIsOpenDeleteModal(false);
        toast.success('Successfully deleted water!');
      })
      .catch(error => {
        console.error('Failed to delete water item:', error);
        toast.error('Failed to delete water item!');
      });
  };

    return (
            <ModalWrapper isOpen={isOpenDeleteModal} onClose={closeModal}>
                <div className={css.container}>
                    <div className={css.titleBox}>
                        <h2 className={css.mainTitle}>Delete entry</h2>
                        <h3 className={css.secondaryTitle}>Are you sure you want to delete the entry?</h3>
                    </div>
                    <div className={css.buttonBox}>
                        <button className={clsx(css.button, css.delete)} onClick={handleDelete}>Delete</button>
                        <button className={clsx(css.button, css.cancel)} onClick={closeModal}>Cancel</button> 
                    </div>
                </div>
            </ModalWrapper>
    )
}

export default DeleteWaterModal;
