import { Blocks } from 'react-loader-spinner';
import './MyLoader.scss';

export const MyLoader = () => {
  return (
    <div className="MyLoader">
      <Blocks
        height="80"
        width="80"
        color="white"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};
