import React, {useState, useEffect} from 'react';
import Tree from 'react-d3-tree';
import IntroText from '../components/IntroText';
import axios from "axios";


// axios call to /api/map 
// get it
// save it on state as a variable
// pass it in to the tree module 

const treeTest = [
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
        name: 'THIS IS A TEST',
        attributes: {
          State: 'Florida'
        },
      },
    ],
  },
];

function TheMap(props) {
  const [myTreeData, setmyTreeData] = useState(treeTest);
  useEffect(() => {
  axios.get('http://localhost:8000/api/map/')
 .then(function (response) {
   setmyTreeData(response.data)
   console.log(response.data);
 })
.catch(function (error) {
   console.log(error);
});
  }, [])
  return(
    <div id="treeWrapper" style={{width: '100%', height: '90em', 'background': 'white'}}>
          <Tree data={myTreeData} orientation={'vertical'} translate={{x: 400, y: 200} } initialDepth={1} separation={{siblings: 2, nonSiblings: 2.2}}/>
    </div>
  )
}

export default TheMap