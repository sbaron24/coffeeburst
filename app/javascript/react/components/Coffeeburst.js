import React from 'react';
import {Sunburst, LabelSeries} from 'react-vis';
import importedData from './d3-coffeeburst_data.json';

const LABEL_STYLE = {
  fontSize: '12px',
  textAnchor: 'middle'
};

function getKeyPath(node) {
  if (!node.parent) {
    return ['root'];
  }

  return [(node.data && node.data.name) || node.name].concat(
    getKeyPath(node.parent)
  );
}

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
    function updateSelection(selected, handleFlavors){
      handleFlavors(selected)
    }
    const {data, finalValue, selected} = this.state;
    return (
      <div className="coffeeburst">
        <Sunburst
          animation
          className="basic-sunburst-example"
          hideRootNode
          onValueMouseOver={node => {
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
            this.setState({
              pathValue: false,
              finalValue: false,
              data: updateData(decoratedData, false)
            })
          }
          onValueClick={node => {
            let selected = { [node.name]: node.hex }
            updateSelection(selected, this.props.handleFlavors)
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
