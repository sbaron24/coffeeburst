import React from 'react';

import {EXTENDED_DISCRETE_COLOR_RANGE} from './theme';
import {Sunburst, LabelSeries} from 'react-vis';

import importedData from './d3-coffeeburst_data.json';

const LABEL_STYLE = {
  fontSize: '12px',
  textAnchor: 'middle'
};

/**
 * Recursively work backwards from highlighted node to find path of valud nodes
 * @param {Object} node - the current node being considered
 * @returns {Array} an array of strings describing the key route to the current node
 */
function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}

/**
 * Recursively modify data depending on whether or not each cell has been selected by the hover/highlight
 * @param {Object} data - the current node being considered
 * @param {Object|Boolean} keyPath - a map of keys that are in the highlight path
 * if this is false then all nodes are marked as selected
 * @returns {Object} Updated tree structure
 */
function updateData(data, keyPath) {
  if (data.children) {
    data.children.map(child => updateData(child, keyPath));
  }

  data.style = {
    fillOpacity: keyPath && !keyPath[data.name] ? 0.2 : 1
  };

  return data;
}

const decoratedData = updateData(importedData, false);

export default class Coffeeburst extends React.Component {
  state = {
    pathValue: false,
    data: decoratedData,
    finalValue: 'SUNBURST',
    selected: {}
  };

  render() {
    const {clicked, data, finalValue, pathValue, selected} = this.state;
    return (
      <div className="basic-sunburst-example-wrapper">
        <Sunburst
          animation
          className="basic-sunburst-example"
          hideRootNode
          onValueMouseOver={node => {
            if (clicked) {
              return;
            }
            const path = getKeyPath(node).reverse();
            const pathAsMap = path.reduce((res, row) => {
              res[row] = true;
              return res;
            }, {});
            this.setState({
              finalValue: path[path.length - 1],
              pathValue: path.join(' > '),
              data: updateData(decoratedData, pathAsMap)
            });
          }}
          onValueMouseOut={() =>
            clicked ? () => {}
              : this.setState({
                  pathValue: false,
                  finalValue: false,
                  data: updateData(decoratedData, false)
                })
          }
          onValueClick={node => {
            if (selected[node.name]) {
              delete selected[node.name]
            } else {
              selected[node.name] = node.hex
            }

            this.setState(
              {selected: selected}
              )
            }
          }

          style={{
            stroke: '#ddd',
            strokeOpacity: 0.3,
            strokeWidth: '0.5'
          }}
          colorType="literal"
          getSize={d => d.value}
          getColor={d => d.hex}
          data={data}
          height={300}
          width={350}
        >
          {finalValue && (
            <LabelSeries
              data={[{x: 0, y: 0, label: finalValue, style: LABEL_STYLE}]}
            />
          )}
        </Sunburst>
      </div>
    );
  }
}
