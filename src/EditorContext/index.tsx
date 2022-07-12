import { createContext, MutableRefObject, useContext } from 'react';
import { Graph } from '@antv/x6';

export const EditorContext = createContext<{
  graph: Graph | null;
  setGraph: (graph: Graph) => void;
}>({ graph: null, setGraph: () => {} });

export const EditorProvider = EditorContext.Provider;

export const useEditorContext = () => useContext(EditorContext);

export const useGraph = () => {
  const { graph } = useEditorContext();

  return graph as Graph;
};
