import styled from 'styled-components'
import Table from '../components/Table';
const HomeContainer = styled.div`
  padding: 1rem;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Table />
    </HomeContainer>
  )
}
