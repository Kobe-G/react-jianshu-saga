import React, {Component} from 'react';
import { Spin,Alert } from 'antd';
import 'antd/dist/antd.css';


class Loading extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Spin tip="Loading..." size="large">
        <Alert
          message="正在加载中"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    )
  }
}

export default Loading;