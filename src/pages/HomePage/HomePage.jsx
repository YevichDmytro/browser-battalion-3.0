import { useState } from 'react';

import css from './HomePage.module.css';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayListModal from '../../components/TodayListModal/TodayListModal';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  return (
    <Container className={css.container}>
      <DailyNorma />
      <div className={css.rightContainer}>
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
  );
};

export default HomePage;
