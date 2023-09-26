import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';

export function SearchInput() {
  const [value, setValue] = useState('');

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
    </Form>
  );
}
