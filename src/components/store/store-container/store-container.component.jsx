import Spinner from '../../spinner/spinner.component';
import StoreCard from '../store-item/store-item.component';
import { StoreContainer } from './store-container.styles';

const Store = ({ category, stores }) => {

  stores.sort()
  const isLoading = false

  return (
    <>
      <h1 className='title'>{category}</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <StoreContainer>
          {stores &&
            stores.map((element, index) =>
              <StoreCard key={index} title={element} />
            )
          }
        </StoreContainer>
      )}
    </>
  );
};

export default Store;
