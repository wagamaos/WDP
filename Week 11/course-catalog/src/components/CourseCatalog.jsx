import CourseCard from './CourseCard';

function CourseCatalog({ courses }) {
  return (
    <section className="course-catalog" aria-label="Available courses">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </section>
  );
}

export default CourseCatalog;
