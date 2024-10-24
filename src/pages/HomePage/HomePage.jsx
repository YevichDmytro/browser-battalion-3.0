import { useState } from 'react';

import css from './HomePage.module.css';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import MonthStatsTable from '../../components/MonthStatsTable/MonthStatsTable';
import TodayListModal from '../../components/TodayListModal/TodayListModal';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addModal, setAddModal] = useState(false)

  return (
    <Container>
      <DailyNorma />
      <div className={css.rightContainer}>
        <TodayWaterList setModal={setIsModalOpen} isAddModal={setAddModal}/>
        {isModalOpen && <TodayListModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isAddModal={addModal} />}
        <MonthStatsTable />
      </div>
    </Container>
  );
};

export default HomePage;
