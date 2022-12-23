function Article(props) {
  const { title, date, preview } = props;

  return (
    <article>
      <h3>{title}</h3>

      {date ? <small>{date}</small> : ["January 1, 1970"]}
      <p className="">{preview}</p>
    </article>
  );
}

Article.defaultProps = {
  date: "January 1, 1970",
};

export default Article;
