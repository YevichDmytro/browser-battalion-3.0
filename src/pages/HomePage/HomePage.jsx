import { useState } from 'react';

import DailyNorma from '../../components/DailyNorma/DailyNorma';
import TodayListModal from '../../components/TodayListModal/TodayListModal';
import TodayWaterList from '../../components/TodayWaterList/TodayWaterList';
import Container from '../../components/ui/Container/Container';

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addModal, setAddModal] = useState(false)

  return (
    <Container>
      <DailyNorma />
      <TodayWaterList setModal={setIsModalOpen} isAddModal={setAddModal}/>
      {isModalOpen && <TodayListModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isAddModal={addModal} />}
    </Container>
  );
};

export default HomePage;
