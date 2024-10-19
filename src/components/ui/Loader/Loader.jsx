import { LiquidLoader } from "react-loaders-kit";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <LiquidLoader loading={true} size="100" duration="1.5" color="#96b8ff" />
    </div>
  );
};

export default Loader;
