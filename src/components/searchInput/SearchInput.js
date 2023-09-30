import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

import { Suggest } from '../suggest/Suggest';
import { useGetSuggestQuery } from '../../api/apiSlice';
import { useDebounce } from '../../hooks/useDebounce';

export function SearchInput({ nameQuery }) {
  const [value, setValue] = useState(nameQuery);
  const [blur, setBlur] = useState(false);
  const debouncedSearch = useDebounce(value, 500);
  const { data } = useGetSuggestQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  return (
    <Form autoComplete='off' onMouseLeave={() => setBlur(false)}>
      <Form.Item
        style={{ display: 'inline-block', marginRight: 20, marginLeft: 80, width: 800 }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          value={value}
          onChange={e => {
            setValue(e.target.value);
            setBlur(true);
          }}
          onFocus={() => setBlur(true)}
        />
      </Form.Item>

      <Link to={`/search?name=${value}`}>
        <button
          type='submit'
          className='button button__main'
          disabled={!value.length}
          onClick={() => setBlur(false)}
        >
          <div className='inner'>Поиск</div>
        </button>
      </Link>
      {data && value && blur && <Suggest data={data} />}
    </Form>
  );
}

SearchInput.propTypes = {
  nameQuery: PropTypes.string,
};
SearchInput.defaultProps = {
  nameQuery: '',
};
