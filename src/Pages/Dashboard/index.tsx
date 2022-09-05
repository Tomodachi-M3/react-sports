import './style';
import { Main } from './style';
import Button from '../../Components/Button';
import Card from '../../Components/TeamCard';
import { Header } from '../../Components/Header';
import { SearchInput } from '../../Components/SearchInput';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import ModalCreateYourTeam from '../../Components/Modal/ModalCreateYourTeam';

export const Dashboard = () => {
  const { user, setIsOpenModal, isOpenModal } = useContext(AuthContext);
  return user ? (
    <>
      <Header />
      {isOpenModal && <ModalCreateYourTeam />}
      <Main>
        <div className='buttonsFilter'>
          <div>
            <Button
              className='createTeam'
              color='#000000'
              backGround='#93C335'
              onClick={() => setIsOpenModal(true)}
            >
              +
            </Button>
            <Button className='filter' color='#000000' backGround='#93C335'>
              Filtrar por...
            </Button>
          </div>

          <div className='searchArea'>
            <SearchInput />
          </div>
        </div>

        <div className='teamsCards'>
          <ul>
            <Card></Card>
          </ul>
        </div>
      </Main>

      <footer></footer>
    </>
  ); : (
    <Navigate to='/login' replace />
  );
};

export default Dashboard;
