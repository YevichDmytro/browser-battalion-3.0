import AuthBottleImg from "../AuthBottleImg/AuthBottleImg";
import AuthForm from "../AuthForm/AuthForm";

import css from "./Auth.module.css";

export default function Auth() {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <AuthForm />
        <AuthBottleImg />
      </div>
    </section>
  );
}
