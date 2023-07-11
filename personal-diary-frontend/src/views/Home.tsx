import styled from 'styled-components';
import Table from '../components/Table';
const HomeContainer = styled.div`
    padding: 1rem;
`;

/**
 * Home component to display the list of entries
 * @returns {JSX.Element} Home component
 */
export default function Home() {
    return (
        <HomeContainer>
            <Table records={[]}/>
        </HomeContainer>
    );
}
