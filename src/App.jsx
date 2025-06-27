import { useState, useEffect } from 'react';

import Navbar from './components/NavBar/Navbar';
import Side from './components/NavBar/Side';
import Home from './Pages/Home/Home';
import Course from './Pages/courses/coures';
// import CustomLoader from './components/CustomLoader/CustomLoader';

import Image from './assets/images';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Pages/Contact Us/Contact Us';
import About from './Pages/About/About'

function App() {
  const [navBoolean, setNavBool] = useState(true);
  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // useEffect(() => {
  //   // Show loader for 4 seconds
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <CustomLoader />;
  // }

  // course props ///////////////

  const courses = [
    {
      id: 'web',
      title: 'Full Stack',
      span: 'Web Development',
      image: Image.webdevelopment,
    },
    {
      id: 'python',
      title: 'Full Stack',
      span: 'Python',
      image: Image.python,
    },
    {
      id: 'java',
      title: 'Full Stack',
      span: 'Java',
      image: Image.java,
    },
    {
      id: 'marketing',
      title: 'Digital',
      span: 'Marketing',
      image: Image.marketing,
    },
    {
      id: 'UI/UX',
      title: 'Designer',
      span: 'UI/UX',
      image: Image.uiux,
    }
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar
          show={show}
          setshow={setshow}
          selectedCourse={selectedCourse}
          onSelectCourse={(courseId) => setSelectedCourse(courseId)}
          navBoolean={navBoolean}
          setNavBool={setNavBool}
        />
        {show && <Side show={show} setshow={setshow} />}

        <Routes>
          <Route path='/' element={<Home onSelectCourse={(courseId) => setSelectedCourse(courseId)} navBoolean={navBoolean} setNavBool={setNavBool}/>}/>
          <Route path='/contact_us' element={<ContactUs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={selectedCourse &&
              courses
              .filter((course) => course.id === selectedCourse)
              .map((course) => <Course key={course.id} coursetitle={course} onSelectCourse={(courseId) => setSelectedCourse(courseId)} setNavBool={setNavBool}/>)}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
