function CourseCard({ title, instructor, credits, required }) {
  return (
    <article className="course-card">
      <div className="course-card__heading">
        <h2>{title}</h2>
        <span className={`course-badge ${required ? 'course-badge--required' : 'course-badge--elective'}`}>
          {required ? '필수' : '선택'}
        </span>
      </div>
      <p className="course-card__instructor">{instructor}</p>
      <p className="course-card__credits">
        <span aria-hidden="true">◷</span> {credits} credits
      </p>
    </article>
  );
}

export default CourseCard;
