import ReactFlow, {
  Position,
} from 'reactflow';


const nodeDefaults = {
  sourcePosition: Position.Right,
  targetPosition: Position.Left,
};

export const edtech_nodes = [
  {
    id: '1e',
    position: { x: 700, y: 150 },
    data: { label: 'default style 1' },
    ...nodeDefaults,
  },
  { id: '2e', position: { x: 1000, y: 0 }, data: { label: 'default style 2' }, ...nodeDefaults },
  { id: '3e', position: { x: 1000, y: 150 }, data: { label: 'default style 3' }, ...nodeDefaults },
  { id: '4e', position: { x: 1000, y: 300 }, data: { label: 'default style 4' }, ...nodeDefaults },
  {
    id: '7',
    type: 'default',
    className: 'annotation',
    data: {
      label: (
        <>
          On the bottom left you see the <strong>Controls</strong> and the bottom right the{' '}
          <strong>MiniMap</strong>. This is also just a node 🥳
        </>
      ),
    },
    draggable: true,
    selectable: true,
    position: { x: 150, y: 400 },
  },
];

export const edtech_edges = [
  {
    id: 'e1-2',
    source: '1e',
    target: '2e',
  },
  {
    id: 'e1-3',
    source: '1e',
    target: '3e',
  },
  {
    id: 'e1-4',
    source: '1e',
    target: '4e',
  },
];