import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Grid, Image } from 'semantic-ui-react';

const newsItemStyle = {
  width: '100%',
  display: 'flex',
};

const newsItemImageStyle = {
  width: '40%',
};

const newsItemContentStyle = {
  position: 'relative',
  width: '60%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const newsItemContentTitleStyle = {
  textAlign: 'left',
  fontFamily: 'Times New Roman, Times, serif',
  fontSize: '1.2em',
};

const newsItemContentSourceStyle = {
  //height: '100%',
  position: 'absolute',
  color: 'grey',
  fontFamily: 'Times New Roman, Times, serif',
  fontStyle: 'italic',
  fontSize: '0.5em',
  whiteSpace: 'nowrap',
  bottom: 0,
};

const newsItemSourceStyle = {
  //position: 'absolute',
  left: 0,
  align: 'left',
};

const newsItemDateStyle = {
  //position: 'absolute',
  right: 0,
  align: 'right',
};

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <Grid columns={2} style={newsItemStyle}>
        <Grid.Row divided stretched>
          <Grid.Column style={newsItemImageStyle}>
            <Image fluid
              src={props.imageUrl}
            />
          </Grid.Column>
          <Grid.Column style={newsItemContentStyle}>
            <Grid.Row verticalAlign='top'>
              <p style={newsItemContentTitleStyle}>
                {props.snippet}
              </p>
            </Grid.Row>
            <Grid.Row stretched verticalAlign='bottom' style={newsItemContentSourceStyle}>
              <span style={newsItemSourceStyle}>{props.source}</span>
              &nbsp; | &nbsp;
              <span style={newsItemDateStyle}>{props.date}</span>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default NewsItem;
