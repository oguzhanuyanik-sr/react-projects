const ListContainer = ({ children }) => {
  return (
    <section className='listContainer'>
      <ul>{children}</ul>
    </section>
  );
};

export default ListContainer;
