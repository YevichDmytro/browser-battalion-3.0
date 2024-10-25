// import classNames from 'classnames';

// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';
// import DaysGeneralStatsCss from './DaysGeneralStats/DaysGeneralStats.module.css';
// import css from './MonthStatsTable.module.css';
// import { getMonthWaterData } from '../../redux/waterTracker/operations';
// import { selectMonthData } from '../../redux/waterTracker/selectors';

const MonthStatsTable = () => {
//   const dispatch = useDispatch();
//   const monthData = useSelector(selectMonthData);

//   const getCurrentMonth = () => {
//     const today = new Date();
//     return `${today.getMonth() + 1}-${today.getFullYear()}`;
//   };
//   const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

//   useEffect(() => {
//     dispatch(getMonthWaterData(currentMonth));
//   }, [dispatch, currentMonth]);

//   const changeMonth = increment => {
//     const [month, year] = currentMonth.split('-').map(Number);
//     const newDate = new Date(year, month - 1 + increment);
//     setCurrentMonth(`${newDate.getMonth() + 1}-${newDate.getFullYear()}`);
//   };

//   const handlePrevMonth = () => changeMonth(-1);
//   const handleNextMonth = () => changeMonth(1);

//   // налаштування відображення модального вікна
//   const [isOpen, setIsOpen] = useState(false);

//   const openGeneralStats = () => {
//     setIsOpen(true);
//   };

//   const closeGeneralStats = () => {
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     const handleEsc = event => {
//       if (event.key === 'Escape') {
//         closeGeneralStats();
//       }
//     };

//     if (isOpen) {
//       window.addEventListener('keydown', handleEsc);
//     } else {
//       window.removeEventListener('keydown', handleEsc);
//     }

//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [isOpen]);

//   return (
//     <div className={css.container}>
//       <div className={css.top}>
//         <p className={css.title}>Month</p>
//         <div className={css.date}>
//           <button onClick={handlePrevMonth}>
//             <svg className={classNames(css.arrow, css.arrowLeft)}>
//               <use href="./month-stats-table/icons.svg#arrow"></use>
//             </svg>
//           </button>
//           <p>April, 2023</p>
//           <button onClick={handleNextMonth}>
//             <svg className={classNames(css.arrow, css.arrowRight)}>
//               <use href="./month-stats-table/icons.svg#arrow"></use>
//             </svg>
//           </button>
//         </div>
//         <ul className={css.list}>
//           {days.map(day => (
//             <li onClick={openGeneralStats} key={day} className={css.item}>
//               <div className={css.day}>
//                 <span>{day}</span>
//               </div>
//               <p className={css.percentage}>50%</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <ul className={css.list}>
//         {monthData.map((dayData, index) => (
//           <li key={dayData.day} className={css.item}>
//             <div className={css.day}>
//               <span>{index + 1}</span>
//             </div>
//             <p className={css.percentage}>{dayData.goalPercentage}%</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
};

export default MonthStatsTable;
