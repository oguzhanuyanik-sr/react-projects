import { useState, useEffect } from 'react';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Select from './components/Select';
import ListContainer from './components/ListContainer';
import ListItem from './components/ListItem';

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterOption, setFilterOption] = useState('all');
  const [isNewItem, setIsNewItem] = useState(false);

  useEffect(() => {
    setFilteredData(
      data.filter(
        (dataItem) =>
          filterOption === 'all' ||
          (filterOption === 'complete' && dataItem.done) ||
          (filterOption === 'uncomplete' && !dataItem.done)
      )
    );
  }, [filterOption, data]);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('todolist', JSON.stringify(data));
    }
  }, [data]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('todolist')) || []);
  }, []);

  const props = {
    select: {
      filterOption: filterOption,
      setFilterOption: setFilterOption,
      setIsNewItem: setIsNewItem,
    },
    footer: {
      data: data,
      setData: setData,
      setFilterOption: setFilterOption,
      setIsNewItem: setIsNewItem,
    },
    list: {
      data: data,
      setData: setData,
      isNewItem: isNewItem,
    },
  };

  return (
    <Container>
      <Header />
      <ListContainer>
        <Select {...props.select} />
        {filteredData.map((current, i) => {
          return <ListItem current={current} key={i} {...props.list} />;
        })}
      </ListContainer>
      <Footer {...props.footer} />
    </Container>
  );
}

export default App;
