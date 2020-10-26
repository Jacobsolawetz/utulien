import React from 'react';
import { Button } from 'reactstrap';


// class TreeNode extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             time: new Date().toLocaleString(),
//             ticks: 0
//         };
//         this._onButtonClick = this._onButtonClick.bind(this);
//     }
//
//     _onButtonClick() {
//         // this.setState({
//         //   showComponent: true,
//         // });
//         return (<TreeNode />)
//     }
//
//     render() {
//         return (
//             <div className="treeNode">
//                 <p>Tree Node</p>
//                 <button type="button home-button" id="button1" onClick={this._onButtonClick} >LeftNode</button>
//                 <button type="button contact-button" id="button2" onClick={this._onButtonClick}>RightNode</button>
//
//                     {this.state.showComponent ?
//                         <TreeNode /> :
//                         <p>None</p>
//                      }
//             </div>
//             // <Box component="span" m={1}>
//             //     Tree Node
//             // </Box>
//         )
//     }
// }

class TreeNode extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            numChildren: 0,
            style: props.style
        };
        console.log(props);
        this.onAddChild = this.onAddChild.bind(this);
    }



  render (props) {
    console.log('rendering');
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {

        console.log((-(this.state.numChildren*100 / 2)) + 100*(i+1));
        var style = {position: "absolute", left: ((-(this.state.numChildren*100 / 2)) + 100*(i+1) - 50).toString()+"px", top: "100px"};


        children.push(<ChildComponent key={this.state.numChildren.toString() + i.toString()} number={i} style = {style} />);
    };

    //console.log(this);

    return (
      <ParentComponent style = {this.state.style} addChild={this.onAddChild}>
        {children}
      </ParentComponent>
    );
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
    //this.render();
  }
}

const ParentComponent = props => (
    <div className="TreeNode" style = {props.style}>
        <div className="TreeNodeContainer" style = {{background: 'red'}} >
            <p>Concept</p>
            <Button id="button1" onClick={props.addChild}  >Extend</Button>
            <div id="children-pane">
                {props.children}
            </div>
        </div>
    </div>
);

const ChildComponent = props => (


    <div  className="ChildComponent" >
        <TreeNode key2={1} style = {props.style}/ >

    </div>

);

export default TreeNode;
