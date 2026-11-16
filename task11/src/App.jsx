import StudentProfileCard from './StudentProfileCard.jsx';

function App() {
  return (
    <main className="directory">
      <header className="directory-header">
        <p className="eyebrow">Campus community</p>
        <h1>Student Directory</h1>
        <p className="directory-intro">Meet students from across our academic community.</p>
      </header>
      <section className="student-grid" aria-label="Student profiles">
        <StudentProfileCard
          name="Wang Yi Heng"
          studentId="202699474"
          major="Computer Science"
          year={2}
          gpa="Not provided"
        />
        <StudentProfileCard
          name="Sample Student - Alex Chen"
          studentId="Sample profile"
          major="Computer Engineering"
          year={2}
          gpa="Not provided"
        />
        <StudentProfileCard
          name="Sample Student - Maya Patel"
          studentId="Sample profile"
          major="Information Systems"
          year={4}
          gpa="Not provided"
        />
      </section>
    </main>
  );
}

export default App;
