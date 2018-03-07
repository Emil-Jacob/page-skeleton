import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Container, Segment, Icon, Card, Grid, Image, Label } from 'semantic-ui-react';

const newsItemStyle = {
  position: 'relative',
  width: '100%',
  display: 'flex',
};

const newsItemImageStyle = {
  position: 'relative',
  width: '50%',
  height: '200px',
  //border: '1px',
  overflow: 'hidden',
};

const newsItemTextStyle = {
  width: '100%',
  height: '35%',
  fontFamily: 'Playfair Display, serif',
  fontSize: '2em',
  lineHeight: '1.0em',
  opacity: '0.8',
  position: 'absolute',
  bottom: '0.2em',
  padding: '0.2em',
  backgroundColor: 'white',
  verticalAlign: 'bottom',
};

const leftLabelStyle = {
  //width: '20px',
  position: 'absolute',
  top: '0.2em',
  left: '0.2em',
};

const rightLabelStyle = {
  //width: '20px',
  position: 'absolute',
  top: '0.2em',
  right: '0.2em',
};

const imageSlideStyle = {
  position: 'absolute',
  left: 0,
  WebkitTransition: 'opacity 1s ease-in-out',
  MozTransition: 'opacity 1s ease-in-out',
  OTransition: 'opacity 1s ease-in-out',
  transition: 'opacity 1s ease-in-out',
  opacity: 0,
  filter: 'alpha(opacity=0)',
};

const imageOpaqueStyle = {
  position: 'absolute',
  left: 0,
  WebkitTransition: 'opacity 1s ease-in-out',
  MozTransition: 'opacity 1s ease-in-out',
  OTransition: 'opacity 1s ease-in-out',
  transition: 'opacity 1s ease-in-out',
  opacity: 1,
  filter: 'alpha(opacity=1)',
};

//const newsItemContentStyle = {
//  width: '60%',
//  height: '100%',
//  display: 'flex',
//  flexDirection: 'column',
//  justifyContent: 'space-between',
//};

//const newsItemContentSourceStyle = {
//  textAlign: 'right',
//  color: 'grey',
//  whiteSpace: 'nowrap',
//};

class MajorNewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftIndex: 0,
      rightIndex: 0,
    };
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    this.timerImageUpdate = setInterval(
      () => this.refreshImages(),
      2500
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerImageUpdate);
  }

  refreshImages() {
    const props = this.props;

    const leftSize = this.props.left.length;
    var leftIndex = this.state.leftIndex + 1;
    if (leftIndex >= leftSize) {
      leftIndex = 0;
    }

    const rightSize = this.props.right.length;
    var rightIndex = this.state.rightIndex + 1;
    if (rightIndex >= rightSize) {
      rightIndex = 0;
    }

    this.setState({
      leftIndex: leftIndex,
      rightIndex: rightIndex,
    });
  }

  render() {
    const props = this.props;
    const leftData = this.props.left[this.state.leftIndex];
    const rightData = this.props.right[this.state.rightIndex];
    const leftImages = this.props.left.map((d,i) => (
      <Image src={d.imageUrl} 
        style={this.state.leftIndex==i?imageSlideStyle:imageOpaqueStyle} 
        key={`left-${i}`}/>
      ));
    const rightImages = this.props.right.map((d,i) => (
      <Image src={d.imageUrl} 
        style={this.state.rightIndex==i?imageSlideStyle:imageOpaqueStyle} 
        key={`right-${i}`}/>
      ));
    return (
      <Segment stacked>
        <Label as='span' color='red' attached='top'>CONTROVERSIAL</Label>
        <Grid.Row columns={2} style={newsItemStyle} stretched>
          <Grid.Column style={newsItemImageStyle} width={6}>
            <div style={{position: 'relative'}}>
              {leftImages}
            </div>
            <div style={leftLabelStyle}>
              <Label circular color='grey'>
                12
              </Label>
            </div>
            <div style={newsItemTextStyle}>
              {leftData.title}
            </div>
          </Grid.Column>
          <Grid.Column style={newsItemImageStyle} width={1}>
            <div style={{position: 'relative'}}>
              {rightImages}
            </div>
            <div style={rightLabelStyle}>
              <Label circular color='grey'>
                8
              </Label>
            </div>
            <div style={newsItemTextStyle}>
              {rightData.title}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Segment>
    );
  }
}

export default MajorNewsItem;
