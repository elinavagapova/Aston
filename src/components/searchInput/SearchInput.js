import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';

import { Suggest } from '../suggest/Suggest';
import { useGetSuggestQuery } from '../../api/apiSlice';
import { useDebounce } from '../../hooks/useDebounce';

export function SearchInput() {
  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(value, 500);
  const { data } = useGetSuggestQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  return (
    <Form autoComplete='off'>
      <Form.Item
        style={{ display: 'inline-block', marginRight: 20, marginLeft: 80, width: 800 }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input value={value} onChange={e => setValue(e.target.value)} />
      </Form.Item>

      <Link to={`/search?name=${value}`}>
        <button type='submit' className='button button__main' disabled={!value.length}>
          <div className='inner'>Поиск</div>
        </button>
      </Link>
      {data && value && <Suggest data={data} />}
    </Form>
  );
}
