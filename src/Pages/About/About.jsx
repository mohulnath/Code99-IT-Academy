
import AboutHome from './About_component/about_home'
import Who from './About_component/who'
import Mission from './About_component/mission'
import Next from './About_component/next'
import Reason from './About_component/reason'
import Launch from '../courses/launch/launch'
import CourseQuestion from '../../Pages/courses/Question-drobdown/course-question'

import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton'
import WhatsAppButton from '../../components/FixedWhatsapp/whatsapp';


import MainFooter from '../../components/Footer/MainFooter'

export default function About() {
    return (
        <>
            <AboutHome />
            <Who />
            <Mission />
            <Next />
            <Reason />
            <CourseQuestion />
            <Launch />
            <MainFooter />
            <WhatsAppButton />
            <ScrollToTopButton />
        </>
    )
}