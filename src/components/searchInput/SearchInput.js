import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';

export function SearchInput() {
  const [value, setValue] = useState('');

  return (
    <Form autoComplete='off'>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        style={{ width: 800, marginRight: 20, marginLeft: 80 }}
      />
      <Link to={`/search?name=${value}`}>
        <button type='submit' className='button button__main'>
          <div className='inner'>Поиск</div>
        </button>
      </Link>
    </Form>
  );
}
