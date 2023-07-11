import styled from 'styled-components'
import './App.css'
import NavBar from './components/NavBar';
import Home from './views/Home';

  const AppContainer = styled.div`
    min-height: 100vh;`;

/**
 *  App component that holds the entire application
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    <AppContainer>
      <NavBar />
      <Home />
    </AppContainer>
  )
}

export default App
