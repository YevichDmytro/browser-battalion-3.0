import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css["loader-container"]}>
      <span className={css.loader}>Load&nbsp;ng</span>
    </div>
  );
};

export default Loader;
