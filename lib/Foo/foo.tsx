import react from "react";
import styles from "./foo.module.css";

interface Props {
  className?: string | undefined;
}

const Foo = ({ className }: Props) => (
  <div className={`${styles.foo} ${className}`}>Foo</div>
);

export { Foo };
