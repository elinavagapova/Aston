import PropTypes from 'prop-types';

export function ButtonLoadMore({ newItemLoading, offset, comicsEnded, onRequest, nameQuery }) {
  return (
    <button
      type='button'
      className='button button__main button__long'
      disabled={newItemLoading}
      onClick={() => onRequest(offset, nameQuery)}
      style={comicsEnded ? { display: 'none' } : { display: 'block' }}
    >
      <div className='inner'>Загрузить еще</div>
    </button>
  );
}

ButtonLoadMore.propTypes = {
  newItemLoading: PropTypes.bool.isRequired,
  offset: PropTypes.number.isRequired,
  comicsEnded: PropTypes.bool.isRequired,
  onRequest: PropTypes.func.isRequired,
  nameQuery: PropTypes.string,
};
ButtonLoadMore.defaultProps = {
  nameQuery: '',
};
