import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'One Piece',
  children: [
    {
      children: [
        {
          name: 'Luffy',
        },
        {
            name: 'Zoro',
          },
          {
            name: 'Nami',
          },
          {
            name: 'Sanji',
          },
          {
            name: 'Robin',
          },
          {
            name: 'Chopper',
          },
          {
            name: 'Sogeking',
          },
        
        // {
        //   name: 'Foreman',
        //   attributes: {
        //     abc: 'Assembly',
        //   },
        //   children: [
        //     {
        //       name: 'Worker',
        //     },
        //   ],
        // },
        // {
        //   name: 'Foreman',
        //   attributes: {
        //     abc: 'Tubandra',
        //   },
        //   children: [
        //     {
        //       name: 'Worker',
        //     },
        //   ],
        // },
      ],
    },
  ],
};

// export default function OrgChartTree() {
//   return (
//       <Tree data={orgChart} />
//   );
// }

// export default function OrgChartTree() {
//     const containerStyles = {
//       width: '100%',
//       height: '100vh', // You can adjust the height as needed
//     };
  
//     const translate = { x: 100, y: 100 }; // Adjust these values to position the tree
  
//     const scaleExtent = { min: 0.1, max: 1.5 }; // Adjust these values for scaling
  
//     return (
//       <div style={containerStyles}>
//         <Tree data={orgChart} translate={translate} scaleExtent={scaleExtent} />
//       </div>
//     );
//   }


// export default function OrgChartTree() {
//     // Calculate center of the screen
//     const centerX = window.innerWidth / 3;
//     const centerY = window.innerHeight / 2;

  
//     // Adjust these values to position the tree
//     const translate = { x: centerX, y: centerY };
  
//     const scaleExtent = { min: 0.1, max: 1.5 };
  
//     return (
//       <div style={{ width: '100%', height: '100vh' }}>
//         <Tree data={orgChart} translate={translate} scaleExtent={scaleExtent} />
//       </div>
//     );
//   }

export default function OrgChartTree() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    // Use `vertical` orientation for a top-to-bottom tree layout
    const orientation = 'vertical';
  
    // Adjust these values to position the tree
    const translate = { x: centerX, y: centerY };
  
    const scaleExtent = { min: 0.1, max: 1.5 };
  
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <Tree data={orgChart} orientation={orientation} translate={translate} scaleExtent={scaleExtent} />
      </div>
    );
  }