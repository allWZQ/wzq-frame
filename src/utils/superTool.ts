import Loadable from "react-loadable";

export class SuperTool {
  getLoadableComponent = (loader: () => Promise<any>) => {
    return Loadable({
      loader,
      loading: () => "请稍等...",
    });
  };
}
export const superTool = new SuperTool();
