import React, {
  ReactNode,
  useRef,
  useImperativeHandle,
  FC,
  forwardRef,
  ForwardedRef,
  useState,
} from 'react';
import { EditorProvider } from '../EditorContext';
import { Graph } from '@antv/x6';

interface IEditorProps {
  children: ReactNode;
}
const Editor = ({ children }: IEditorProps, ref: ForwardedRef<{ graph: Graph }>) => {
  const [graph, setGraph] = useState<Graph | null>(null);

  useImperativeHandle(ref, () => ({
    graph: graph as Graph,
  }));
  return (
    <EditorProvider value={{ graph, setGraph }}>
      <div>{children}</div>
    </EditorProvider>
  );
};

export default forwardRef(Editor);
