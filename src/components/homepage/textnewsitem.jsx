import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import { Grid } from 'semantic-ui-react';

// TEXT NEWS
// double space, big image, animated text

const newsItemStyle = {
  width: '100%',
  display: 'flex',
};

const newsHeadlineStyle = {
  width: '100%',
  fontFamily: 'Playfair Display, serif',
  fontSize: '2em',
  lineHeight: '1.0em',
};

const newsItemContentTitleStyle = {
  width: '100%',
  textAlign: 'left',
  fontFamily: 'Times New Roman, Times, serif',
  fontSize: '1.2em',
};



class TextNewsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <Grid.Row style={newsItemStyle}>
        <Grid.Row style={newsHeadlineStyle}>
          Afrin offensive: 36 pro-Syrian government soldiers 'killed in Turkish air strike'
        </Grid.Row>
        <Grid.Row style={newsItemContentTitleStyle}>
          At least 36 pro-Syrian government troops have been killed by a Turkish air strike in the region of Afrin, a monitoring group says.  
        </Grid.Row>
      </Grid.Row>
    );
  }
}

export default TextNewsItem;
