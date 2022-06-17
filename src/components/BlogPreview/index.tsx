import { MediumPost } from "../../types/medium";
import Styles from "./styles.module.scss";

type Props = {
  post: MediumPost;
};
export default function BlogPreview({ post }: Props) {
  const { title, link, categories, thumbnail } = post;

  return (
    <div className={Styles.card}>
      <div className={Styles.titleCard}>
        <img src={thumbnail} alt={title} className={Styles.titleCardImage} />

        <h1 className={Styles.title}>{title}</h1>
      </div>

      <div className="pa3">
        <p className={`${Styles.desc} mt0 mb2`}>{title}</p>

        <div className={Styles.tags}>
          Tagged:
          {categories.map((t) => (
            <div className={Styles.tag} data-tag={t}>
              {t}
            </div>
          ))}
        </div>

        <a className={Styles.link} href={link}>
          <span className={Styles.linkInner}>View</span>
        </a>
      </div>
    </div>
  );
}
