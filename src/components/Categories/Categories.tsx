import styles from "./Categories.module.css";

type CategoriesProps = {
    title:string;
    brands:string[];
}
export default function Categories({title, brands}: CategoriesProps) {
  return (
    <div className={styles.Wrapper}>
      <h2>{title}</h2>
      <div className={styles.Content}>
        {brands.map(brand => <p>{brand}</p>)}
      </div>
    </div>
  );
}
