import { Route, Routes } from 'react-router-dom';
import PageCalendar from '../pages/PageCalendar/PageCalendar';
import { Wrapper } from './App.style';

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<PageCalendar />} />
      </Routes>
    </Wrapper>
  );
};
