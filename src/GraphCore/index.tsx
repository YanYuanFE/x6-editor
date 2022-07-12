import { Graph } from '@antv/x6';
import React, { FC, useEffect, useRef } from 'react';
import { useEditorContext } from '../EditorContext';
import { Model } from '@antv/x6/src/model/model';
import { Options as GraphOptions } from '@antv/x6/src/graph/options';

export interface IGraphCoreProps {
  /**
   *
   * @description 组件 CSS className
   * @default           无
   */
  className?: string;
  /**
   *
   * @description X6 Graph 配置
   * @default           无
   */
  graphConfig?: Partial<GraphOptions.Manual>;
  /**
   *
   * @description X6 渲染数据
   * @default           无
   */
  data?: Model.FromJSONData;
}

const GraphCore: FC<IGraphCoreProps> = ({ graphConfig, data, className }) => {
  const ref = useRef(null);
  const { setGraph } = useEditorContext();

  const initGraph = () => {
    if (!ref.current) return;
    const { clientWidth, clientHeight } = ref.current || {};
    console.log(clientHeight, clientWidth);
    const graph = new Graph({
      container: ref.current,
      width: clientWidth,
      height: clientHeight,
      ...graphConfig,
    });
    graph.fromJSON(data);
    setGraph(graph);
  };

  useEffect(() => {
    initGraph();
  }, [graphConfig]);
  return <div ref={ref} className={className}></div>;
};

export default GraphCore;
