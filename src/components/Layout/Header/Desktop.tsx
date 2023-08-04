import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { LogoBrandIcon } from 'components/Icons/LogoBrandIcon';
import { Header } from './Styled';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];

const Desktop = () => {
  return <header>
    <div className="container">
      <div className="logo">
        <a href="/">
          <div className="logo-full">
            <LogoBrandIcon width={120} height={60} color='#ff5a5f' />
          </div>
        </a>
      </div>
      <div className="search-bar">
        <div>
          <div>
            <button>
              <div>Địa điểm bất kỳ</div>
            </button>
            <span className='divider'></span>
            <button>
              <div>tuần bất kỳ</div>
            </button>
            <span className='divider'></span>
            <button>
              <div>Thêm khách</div>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <nav>
          <div>
            <a href="/">
              <div>Cho thuê chỗ ở qua Airbnb</div>
            </a>
            <div>
              <button type='button'>
                <i className="fa-solid fa-earth-europe"></i>
              </button>
            </div>
          </div>
          <div>
            <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
              <Button>
                <div><i className="fa-solid fa-bars"></i></div>
                <div><i className="fa-solid fa-circle-user"></i></div>
              </Button>
            </Dropdown>
          </div>
        </nav>
      </div>
    </div>
  </header>;
};

export default Desktop;