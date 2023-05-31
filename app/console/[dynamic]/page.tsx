import { Foo } from "../../../lib/Foo/foo";
import styles from "./page.module.css";

const Page = () => (
  <>
    <div>This is a page!</div>
    <Foo className={styles.override} />
  </>
);

export default Page;
