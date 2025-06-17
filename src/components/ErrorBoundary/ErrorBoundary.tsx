import React from 'react';
// 定义 Props 接口，包含 children 属性
interface Props {
  children?: React.ReactNode; // children 属性通常是可选的
}

// 定义 State 接口，包含 hasError 属性
interface State {
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{ textAlign: 'center',
        height: '100vh', 
      lineHeight: '100vh'
    }
    }> Something went wrong.</h1>;
    }
    return this.props.children;
  }
}