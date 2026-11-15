import CourseCatalog from './components/CourseCatalog';
import './App.css';

const courses = [
  { id: 1, title: 'Web Programming', instructor: 'Dr. Toshpulatov', credits: 3, required: true },
  { id: 2, title: 'Database Systems', instructor: 'Dr. Kim', credits: 3, required: true },
  { id: 3, title: 'Mobile App Dev', instructor: 'Dr. Lee', credits: 2, required: false }
];

function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <p className="eyebrow">Week 11 · React challenge</p>
        <h1>Course Catalog</h1>
        <p>Explore this semester’s courses and see which ones are required.</p>
      </header>
      <CourseCatalog courses={courses} />
    </main>
  );
}

export default App;
