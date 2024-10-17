import css from './WhyDrinkWater.module.css'
import icons from '../../assets/welcome-page/icons.svg'
export default function WhyDrinkWater() {
    return (
        <div className={css.justForCheck}>
            <div className={css.mainBox}>
                <h3 className={css.title}>Why drink water</h3>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Supply of nutrients to all organs</span></li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Providing oxygen to the lungs</span></li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Maintaining the work of the heart</span></li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Release of processed substances</span></li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Ensuring the stability of the internal environment</span></li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Maintaining within the normal temperature</span></li>
                    <li className={css.listItem}>
                        <svg className={css.listItemSvg} width={8} height={8}>
                            <use className={css.listItemUse} href={`${icons}#icon-circle`}></use>
                        </svg>
                        <span className={css.listItemText}>Maintaining an immune system capable of resisting disease</span></li>
                </ul>
            </div>
        </div>
    )
}