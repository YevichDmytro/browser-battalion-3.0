import classNames from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './HomePage.module.css';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayListModal from '../../components/TodayListModal/TodayListModal';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import { selectWaterIsLoading } from '../../redux/waterTracker/selectors';

const HomePage = () => {
  const isListLoading = useSelector(selectWaterIsLoading);
  console.log(isListLoading);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  return (
    <div className={css.wrapper}>
      <Container className={css.homepage}>
        <div className={css.col}>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        <div className={classNames(css.col, css.rightCol)}>
          {isListLoading && (
            <div className={css.loader}>
              <h2 className={css.animate}>Loading</h2>
            </div>
          )}
          <TodayWaterList
            setModal={setIsModalOpen}
            setAddModal={setIsAddModal}
            setEditingItem={setEditingItem}
          />
          {isModalOpen && (
            <TodayListModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              isAddModal={isAddModal}
              editingItem={editingItem}
            />
          )}
          <MonthStatsTable />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
