import RootStore from '~/stores';
import { tool } from './Tool';
import Loadable from 'react-loadable';

export class SuperTool {
  /**
   * 跳转路由
   * @param url
   */
  pushUrl = (url: string) => {
    const { context } = RootStore.rootStore;
    if (context) {
      context.history.push(url);
    } else {
      window.location.href = '/';
    }
    tool.scrollToTop();
  };
  replaceUrl = (url: string) => {
    const { context } = RootStore.rootStore;
    if (context) {
      context.history.replace(url);
    } else {
      window.location.href = '/';
    }
    tool.scrollToTop();
  };
  getLoadableComponent = (loader: () => Promise<any>) => {
    return Loadable({
      loader,
      loading: () => '请稍等...',
    });
  };
}
export const superTool = new SuperTool();
