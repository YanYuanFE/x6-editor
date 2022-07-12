import { Button } from 'antd';
import React, { useEffect, useRef } from 'react';
import { GraphCore, Editor } from 'x6-editor';
import { useGraph } from '../../EditorContext';

const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40, // Number，必选，节点位置的 x 值
      y: 40, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160, // Number，必选，节点位置的 x 值
      y: 180, // Number，必选，节点位置的 y 值
      width: 80, // Number，可选，节点大小的 width 值
      height: 40, // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
    },
  ],
};

const Test = () => {
  const graph = useGraph();

  useEffect(() => {
    console.log(graph);
  }, []);

  return <div>{JSON.stringify(graph)}</div>;
};

export default () => {
  const ref = useRef();

  const handleClick = () => {
    const graph = ref.current?.getGraph();
    console.log(graph);
    const graphData = graph?.toJSON();
    console.log(graphData);
  };
  return (
    <div>
      <Button type={'primary'} onClick={handleClick}>
        获取数据
      </Button>
      <Editor ref={ref}>
        <GraphCore data={data} graphConfig={{ height: 500 }} />
        <Test />
      </Editor>
    </div>
  );
};
