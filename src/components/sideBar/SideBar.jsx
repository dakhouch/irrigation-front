import SideBarFooter from './SideBarFooter';
import SideBarItemCollapse from './SideBarItemCollapse';
import logo from '../../assets/logo/irrigationLogo.png'
import { ALL_APP_NAVLINKS } from '../../routes/paths';
import SideBarItem from './SideBarItem';
const SideBar = () => {
  return (
    <div className={`bg-white ml-0 w-1/6 fixed top-0 left-0 bottom-0 flex-grow-0 min-h-full max-w-[350px] shadow-2xl min-w-fit z-0`}>
      <div className="w-full p-4 space-y-4 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between items-center">
              <img className="h-20" src={logo} />
          </div>
          <nav className="flex flex-col w-full flex-grow mt-4">
            <ul className="text-dark-900">
              {ALL_APP_NAVLINKS.map((item) => {
                if (item.subLinks.length !== 0) {
                  return (
                    <div key={item.label}>
                      <SideBarItemCollapse data={item} />
                    </div>
                  );
                }
                return (
                  <div key={item.label}>
                    <SideBarItem
                      path={item.link}
                      title={item.label}
                      icon={item.icon}
                    />
                  </div>
                );
              })}
            </ul>
          </nav>
        </div>
        <SideBarFooter />
      </div>
    </div>
  );
};

export default SideBar;
