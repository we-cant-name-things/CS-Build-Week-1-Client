import React from 'react';
import Tree from 'react-d3-tree';
 
const myTreeData = [
  {
    name: 'Miami, Florida',

    children: [
      {
        name: 'Jacksonville',
        attributes: {
          State: 'Florida'
        },
    children:[
      {
        name: 'Test',
        attributes: {
          State: 'GA'
        }
      }
    ]

      },
      {
        name: 'Tallahassee',
        attributes: {
          State: 'Florida'
        },
      },
    ],
  },
];

function TheMap(props) {
  return(
    <div id="treeWrapper" style={{width: '100%', height: '90em', 'background': 'white'}}>
          <Tree data={myTreeData} orientation={'vertical'} translate={{x: 400, y: 200} } separation={{siblings: 2}}/>
    </div>
  )
}

export default TheMap